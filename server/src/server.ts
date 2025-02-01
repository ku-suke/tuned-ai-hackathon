import express from 'express';
import cors from 'cors';
import spdy from 'spdy';
import * as admin from 'firebase-admin';
import { aiService } from './services/ai';
import { firestoreService } from './services/firestore';
import { validateEnv } from './config/env';

interface SSEMessage {
  type: 'message' | 'error';
  content?: string;
  error?: string;
}

// 環境変数の検証
const env = validateEnv();

// Firebaseの初期化
admin.initializeApp({
  projectId: env.PROJECT_ID
});

const app = express();

// CORSの設定
app.use(cors({
  origin: true, // すべてのオリジンを許可
  credentials: true, // クレデンシャルを許可
  methods: ['GET', 'POST', 'OPTIONS'], // 許可するHTTPメソッド
  allowedHeaders: ['Content-Type', 'Authorization'], // 許可するヘッダー
}));

app.use(express.json());

// 認証ミドルウェア
const authenticateUser = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    res.locals.uid = decodedToken.uid;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// SSEヘッダーを設定するミドルウェア
const sseMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // CORSヘッダーの設定
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // SSEヘッダーの設定
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();
  next();
};

// プリフライトリクエストの処理
app.options('*', cors());

// チャットストリームエンドポイント
app.post('/api/chat/stream', authenticateUser, sseMiddleware, async (req, res) => {
  try {
    const userId = res.locals.uid;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const { projectId, stepId, message } = req.body;
    if (!projectId || !stepId || !message) {
      res.status(400).json({ error: 'Missing required parameters' });
      return;
    }

    const step = await firestoreService.getProjectStep(userId, projectId, stepId);
    if (!step) {
      res.status(404).json({ error: 'Step not found' });
      return;
    }

    // システムプロンプトの構築
    const prompt = step.templateStepId;
    
    // 参照ドキュメントの内容を追加
    const contextDocs = step.documents
      .filter(doc => doc.isEnabled)
      .map(doc => {
        const refDoc = step.uploadedDocuments.find(ref => ref.id === doc.id);
        return refDoc ? `Document: ${refDoc.title}\n${refDoc.content}` : '';
      })
      .join('\n\n');

    // AIによる応答生成
    const success = await aiService.generateContextResponse(prompt, contextDocs, message, res);
    if (!success) {
      res.status(500).json({ error: 'Failed to generate response' });
      return;
    }

    res.end();
  } catch (error) {
    console.error('Error in chat stream:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 回答例生成エンドポイント
app.post('/api/chat/example', authenticateUser, async (req, res) => {
  try {
    const userId = res.locals.uid;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const { projectId, stepId } = req.body;
    if (!projectId || !stepId) {
      res.status(400).json({ error: 'Missing required parameters' });
      return;
    }

    const step = await firestoreService.getProjectStep(userId, projectId, stepId);
    if (!step) {
      res.status(404).json({ error: 'Step not found' });
      return;
    }

    const project = await firestoreService.getProject(userId, projectId);
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }

    const template = await firestoreService.getProjectTemplate(userId, project);
    if (!template) {
      res.status(404).json({ error: 'Template not found' });
      return;
    }

    const templateStep = template.steps?.find(s => s.id === step?.templateStepId);
    if (!templateStep?.userChoicePromptTemplate) {
      res.status(400).json({ error: 'Template step or user choice prompt not found' });
      return;
    }

    const recentConversations = Array.isArray(step?.conversations) && step.conversations.length > 0
      ? step.conversations
          .slice(-5)
          .map(conv => `${conv.role}: ${conv.content}`)
          .join('\n')
      : '';

    const examples = await aiService.generateExampleResponses(
      templateStep.systemPrompt,
      recentConversations
    );

    if (!examples) {
      res.status(500).json({ error: 'Failed to generate examples' });
      return;
    }

    res.json(examples);
  } catch (error) {
    console.error('Error in generate example:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 成果物生成エンドポイント
app.post('/api/chat/artifact', authenticateUser, async (req, res) => {
  try {
    const userId = res.locals.uid;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const { projectId, stepId } = req.body;
    if (!projectId || !stepId) {
      res.status(400).json({ error: 'Missing required parameters' });
      return;
    }

    const step = await firestoreService.getProjectStep(userId, projectId, stepId);
    if (!step) {
      res.status(404).json({ error: 'Step not found' });
      return;
    }

    const project = await firestoreService.getProject(userId, projectId);
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }

    const template = await firestoreService.getProjectTemplate(userId, project);
    if (!template) {
      res.status(404).json({ error: 'Template not found' });
      return;
    }

    const templateStep = template.steps?.find(s => s.id === step?.templateStepId);
    if (!templateStep?.userChoicePromptTemplate) {
      res.status(400).json({ error: 'Template step or user choice prompt not found' });
      return;
    }

    const artifact = await aiService.generateArtifact(
      templateStep.artifactGenerationPrompt,
      step.conversations
    );

    if (!artifact) {
      res.status(500).json({ error: 'Failed to generate artifact' });
      return;
    }

    const updated = await firestoreService.updateStepArtifact(
      userId,
      projectId,
      stepId,
      artifact
    );

    if (!updated) {
      res.status(500).json({ error: 'Failed to save artifact' });
      return;
    }

    res.json(artifact);
  } catch (error) {
    console.error('Error in generate artifact:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ヘルスチェックエンドポイント
app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

// HTTP/2サーバーの起動
const port = env.PORT;

// Cloud Runではhttpで起動
const server = spdy.createServer(
  {
    spdy: {
      plain: true,
    },
  },
  app
);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
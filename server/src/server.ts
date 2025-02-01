import express from 'express';
import spdy from 'spdy';
import * as admin from 'firebase-admin';
import { aiService } from './services/ai';
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
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();
  next();
};

// チャットエンドポイント（SSE）
app.get('/api/chat/stream', authenticateUser, sseMiddleware, async (req, res) => {
  const messageId = req.query.messageId as string;
  const message = req.query.message as string;

  if (!messageId || !message) {
    return res.status(400).json({ error: 'messageId and message are required' });
  }

  // SSEメッセージの送信関数を定義
  const sendEvent = (data: SSEMessage) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  try {
    // クライアントの接続が切れた場合の処理
    req.on('close', () => {
      console.log('Client disconnected');
    });

    // AIサービスを使用してストリーミングレスポンスを生成
    const stream = await aiService.generateChatResponse([message]);
    
    for await (const chunk of stream) {
      sendEvent({ type: 'message', content: chunk });
    }

    res.end();
  } catch (error) {
    console.error('Stream error:', error);
    sendEvent({ type: 'error', error: 'Internal server error' });
    res.end();
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
import { onObjectFinalized, StorageEvent } from "firebase-functions/v2/storage";
import { setGlobalOptions } from "firebase-functions/v2";
import { defineString } from "firebase-functions/params";
import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import { Storage } from "@google-cloud/storage";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import type {
  ProjectTemplate,
  ReferenceDocument,
  ProjectStep,
  Project,
  PublishedProjectTemplate,
  ProjectTemplateStep,
  Conversation,
} from "./types/firestore";

// Cloud Functions のグローバル設定
setGlobalOptions({
  maxInstances: 10,
  memory: "2GiB",
  timeoutSeconds: 540,
  region: "us-west1"
});

// Firebase Admin初期化
admin.initializeApp();

// Google Cloud Storageクライアントの初期化
const storage = new Storage();

// Gemini APIの初期化
const geminiApiKey = defineString("GEMINI_API_KEY");
const genAI = new GoogleGenerativeAI(geminiApiKey.value()  || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

// 安全性の設定
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

/**
 * ファイルからテキストを抽出する関数
*/
async function extractText(bucket: string, filePath: string, contentType: string): Promise<string> {
  const file = storage.bucket(bucket).file(filePath);
  const [fileContent] = await file.download();

  if (contentType === "application/pdf") {
    const pdfParse = require('pdf-parse');
    const pdfData = await pdfParse(fileContent);
    return pdfData.text;
  } else if (contentType.startsWith("text/")) {
    return fileContent.toString("utf-8");
  }

  throw new Error(`Unsupported file type: ${contentType}`);
}

/**
 * Firestoreのドキュメントパスを解析する関数
 */
function parseFilePath(filePath: string) {
  const match = filePath.match(/users\/(.+?)\/projectTemplates\/(.+?)\/steps\/(.+?)\/(.+)/);
  if (!match) throw new Error(`Invalid file path: ${filePath}`);

  const [, userId, templateId, stepId, fileName] = match;
  return { userId, templateId, stepId, fileName };
}

/**
 * ストリームレスポンスを設定する関数
 */
function setStreamingResponse(response: any) {
  response.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });
}

/**
 * プロジェクトステップの取得
 */
async function getProjectStep(userId: string, projectId: string, stepId: string): Promise<ProjectStep | null> {
  try {
    const stepDoc = await admin.firestore()
      .collection('users')
      .doc(userId)
      .collection('projects')
      .doc(projectId)
      .collection('steps')
      .doc(stepId)
      .get();

    if (!stepDoc.exists) return null;

    const data = stepDoc.data();
    if (!data) return null;

    // 型安全な変換処理
    const conversations = Array.isArray(data.conversations) 
      ? data.conversations.map((conv): Conversation => ({
          id: conv.id || '',
          role: conv.role || 'user',
          content: conv.content || '',
          createdAt: conv.createdAt?.toDate() || new Date()
        }))
      : [];

    // documents配列の安全な変換
    const documents = Array.isArray(data.documents) 
      ? data.documents 
      : [];

    // uploadedDocuments配列の安全な変換
    const uploadedDocuments = Array.isArray(data.uploadedDocuments) 
      ? data.uploadedDocuments 
      : [];

    return {
      ...data,
      id: stepDoc.id,
      conversations,
      documents,
      uploadedDocuments
    } as ProjectStep;

  } catch (error) {
    console.error('Error in getProjectStep:', error);
    return null;
  }
}

/**
 * システムプロンプトとファイルを使用したチャットAI
 */
export const chatWithContext = onRequest({
  cors: true
}, async (req, res) => {
  try {
    // 認証情報の確認
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).send('Unauthorized');
      return;
    }

    const idToken = authHeader.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const userId = decodedToken.uid;

    const { projectId, stepId, message } = req.body;
    if (!projectId || !stepId || !message) {
      res.status(400).send('Missing required parameters');
      return;
    }

    const step = await getProjectStep(userId, projectId, stepId);
    if (!step) {
      res.status(404).send('Step not found');
      return;
    }

    // システムプロンプトの構築
    let prompt = step.templateStepId;
    
    // 参照ドキュメントの内容を追加
    const contextDocs = step.documents
      .filter(doc => doc.isEnabled)
      .map(doc => {
        const refDoc = step.uploadedDocuments.find(ref => ref.id === doc.id);
        return refDoc ? `Document: ${refDoc.title}\n${refDoc.content}` : '';
      })
      .join('\n\n');

    // ストリーミングレスポンスの設定
    setStreamingResponse(res);

    const chat = model.startChat({
      history: [],
      safetySettings,
    });

    // コンテキストと質問を結合
    const fullPrompt = `
System: ${prompt}

Reference Documents:
${contextDocs}

User Question: ${message}`;

    const result = await chat.sendMessageStream(fullPrompt);

    for await (const chunk of result.stream) {
      const text = chunk.text();
      res.write(`data: ${JSON.stringify({ text })}\n\n`);
    }

    res.end();
  } catch (error) {
    console.error('Error in chatWithContext:', error);
    res.status(500).send('Internal server error');
  }
});

/**
 * 直近の会話とユーザー選択肢プロンプトによる回答例生成
 */
export const generateExampleResponse = onRequest({
  cors: true
}, async (req, res) => {
  try {
    // 認証情報の確認
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).send('Unauthorized');
      return;
    }

    const idToken = authHeader.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const userId = decodedToken.uid;

    const { projectId, stepId } = req.body;
    if (!projectId || !stepId) {
      res.status(400).send('Missing required parameters');
      return;
    }

    // プロジェクトステップの取得
    const step = await getProjectStep(userId, projectId, stepId);
    if (!step) {
      res.status(404).send('Step not found');
      return;
    }

    // Firestoreへの参照を修正
    const projectRef = admin.firestore()
      .collection('users')
      .doc(userId)
      .collection('projects')
      .doc(projectId);

    // 存在確認を追加
    const projectDoc = await projectRef.get();
    if (!projectDoc.exists) {
      throw new Error('Project not found');
    }

    const project = projectDoc.data() as Project;
    const templateRef = project.templateType === 'private'
      ? admin.firestore()
          .collection('users')
          .doc(userId)
          .collection('projectTemplates')
          .doc(project.templateId)
      : admin.firestore()
          .collection('publishedProjectTemplates')
          .doc(project.templateId);

    const templateDoc = await templateRef.get();

    // データ存在チェック
    if (!templateDoc?.exists) {
      res.status(404).send('Template not found');
      return;
    }

    // テンプレートデータの型安全な取得
    const template = templateDoc.data() as (ProjectTemplate | PublishedProjectTemplate);
    if (!template) {
      res.status(400).send('Invalid template data');
      return;
    }

    // ステップ存在チェック
    const templateStep = template?.steps?.find((s: ProjectTemplateStep) => s.id === step?.templateStepId);
    if (!templateStep?.userChoicePromptTemplate) {
      res.status(400).send('Template step or user choice prompt not found');
      return;
    }

    // 会話履歴の安全な取得
    const recentConversations = Array.isArray(step?.conversations) && step.conversations.length > 0
      ? step.conversations
          .slice(-5)
          .map(conv => `${conv.role}: ${conv.content}`)
          .join('\n')
      : '';

    // chatの初期化チェック
    model.generationConfig.maxOutputTokens = 400;
    const chat = model.startChat({
      history: [],
      safetySettings,
    });

    // システムプロンプトと会話履歴を結合
    const fullPrompt = `
System: あなたは会話の文脈を理解して適切な選択肢を提示するAIアシスタントです。
以下の情報を元に、ユーザーが選択できる適切な回答例を3つ生成してください。
ユーザーは、別の専門家AIからヒアリングを受けています。
回答例は、会話の文脈に沿った自然な表現を心がけてください。

Recent Conversations:
専門家AIの定義: ${templateStep.systemPrompt}
${recentConversations}

Based on the above context, generate 3 appropriate response options that:
1. Follow the user choice prompt template
2. Consider the context of recent conversations
3. Are natural and conversational
4. Help move the conversation forward

Output your response in the following JSON format:
{
  "exampleTalkResponse": [
    "短い１５文字前後の回答例1",
    "短い１５文字前後の回答例2",
    "短い１５文字前後の回答例3"
  ]
}`;
    console.log('Generated prompt:', fullPrompt);

    const result = await chat.sendMessage(fullPrompt);
    const response = result.response;
    const text = response.text();
    console.log('Generated response:', text);

    // JSON文字列を抽出 ('{' から '}' まで)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('JSON not found in response');
    }

    // JSONをパース
    const parsed = JSON.parse(jsonMatch[0]);
    if (!parsed.exampleTalkResponse || !Array.isArray(parsed.exampleTalkResponse)) {
      throw new Error('Invalid response format');
    }

    // 配列として返す
    res.json(parsed.exampleTalkResponse);

  } catch (error) {
    console.error('Error in generateExampleResponse:', error);
    if (error instanceof Error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    } else {
      res.status(500).send('Internal server error');
    }
  }
});

/**
 * 会話履歴と成果物指示による成果物生成
 */
export const generateArtifact = onRequest({
  cors: true
}, async (req, res) => {
  try {
    // 認証情報の確認
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).send('Unauthorized');
      return;
    }

    const idToken = authHeader.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const userId = decodedToken.uid;

    const { projectId, stepId } = req.body;
    if (!projectId || !stepId) {
      res.status(400).send('Missing required parameters');
      return;
    }

    const step = await getProjectStep(userId, projectId, stepId);
    if (!step) {
      res.status(404).send('Step not found');
      return;
    }
    
    const projectRef = admin.firestore()
      .collection('users')
      .doc(userId)
      .collection('projects')
      .doc(projectId);

    const projectDoc = await projectRef.get();
    if (!projectDoc.exists) {
      res.status(404).send('Project not found');
      return;
    }
    const project = projectDoc.data() as Project;
    const templateRef = project.templateType === 'private'
      ? admin.firestore()
          .collection('users')
          .doc(userId)
          .collection('projectTemplates')
          .doc(project.templateId)
      : admin.firestore()
          .collection('publishedProjectTemplates')
          .doc(project.templateId);

    const templateDoc = await templateRef.get();

    // テンプレートデータの型安全な取得
    const template = templateDoc.data() as (ProjectTemplate | PublishedProjectTemplate);
    if (!template) {
      res.status(400).send('Invalid template data');
      return;
    }

    // ステップ存在チェック
    const templateStep = template?.steps?.find((s: ProjectTemplateStep) => s.id === step?.templateStepId);
    if (!templateStep?.userChoicePromptTemplate) {
      res.status(400).send('Template step or user choice prompt not found');
      return;
    }

    // 会話履歴をchat historyとして設定
    const history = step.conversations.map(conv => ({
      role: conv.role === 'user' ? 'user' : 'model',
      parts: [{ text: conv.content }],
    }));

    const chat = model.startChat({
      history,
      safetySettings,
    });

    // JSONフォーマットを指定したプロンプト
    const prompt = `
System: ${templateStep.artifactGenerationPrompt}
以下の形式のJSONで成果物を生成してください：

{
  "title": "成果物のタイトル",
  "content": "成果物の本文（詳細な内容）",
  "summary": "成果物の要約（100文字程度）"
}
`;

    // 成果物生成
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    const text = response.text();

    try {
      // JSONを抽出 ('{' から '}' まで)
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('JSON not found in response');
      }

      // JSONをパース
      const artifact = JSON.parse(jsonMatch[0]);

      // artifactの型チェックと必要なプロパティの追加
      const validatedArtifact = {
        title: artifact.title || '無題',
        content: artifact.content || '',
        summary: artifact.summary || '',
        charCount: artifact.content?.length || 0,
        createdAt: new Date()
      };

      // Firestoreに保存
      await admin.firestore()
        .collection('users')
        .doc(userId)
        .collection('projects')
        .doc(projectId)
        .collection('steps')
        .doc(stepId)
        .update({
          artifact: validatedArtifact
        });

      // 成功レスポンス
      res.json(validatedArtifact);

    } catch (error) {
      console.error('Error processing artifact:', error);
      res.status(500).json({ error: 'Failed to process artifact' });
    }
  } catch (error) {
    console.error('Error in generateArtifact:', error);
    res.status(500).send('Internal server error');
  }
});

/**
 * ファイルアップロード完了時のトリガー関数
 */
export const onFileUploaded = onObjectFinalized({
  memory: "2GiB",
  timeoutSeconds: 540,
  region: "us-west1"
}, async (event: StorageEvent) => {
  // ファイル情報の取得
  const fileBucket = event.data.bucket;
  const filePath = event.data.name;
  const contentType = event.data.contentType;

  if (!filePath || !contentType) {
    throw new Error("File path or content type is missing");
  }

  try {
    // パスの解析
    const { userId, templateId, stepId } = parseFilePath(filePath);

    // テキストの抽出
    const extractedText = await extractText(fileBucket, filePath, contentType);
    // 1024x1024バイト以下に切る
    const truncatedText = extractedText.slice(0, 1024 * 1024);

    // Firestoreのリファレンス
    const templateRef = admin.firestore()
      .collection("users")
      .doc(userId)
      .collection("projectTemplates")
      .doc(templateId);

    // トランザクションでの更新
    await admin.firestore().runTransaction(async (transaction) => {
      const doc = await transaction.get(templateRef);
      if (!doc.exists) {
        throw new Error("Template document does not exist");
      }

      const templateData = doc.data();
      if (!templateData) {
        throw new Error("Template data is missing");
      }

      const template = {
        ...templateData,
        id: doc.id,
      } as ProjectTemplate;

      // 該当するステップの更新
      const updatedSteps = template.steps.map((step) => {
        if (step.id === stepId) {
          // 新しいリファレンスドキュメントの作成
          const newDoc: ReferenceDocument = {
            id: filePath, // Storage内のパスをIDとして使用
            title: event.data.name.split("/").pop() || "Uploaded document",
            parsed: true,
            content: truncatedText,
            type: contentType.startsWith("application/pdf") ? "pdf" : "text"
          };

          // 既存のリファレンスドキュメントを保持しつつ、新しいものを追加
          return {
            ...step,
            referenceDocuments: [
              ...(step.referenceDocuments || []),
              newDoc
            ]
          };
        }
        return step;
      });

      // ドキュメントの更新
      transaction.update(templateRef, { steps: updatedSteps });
    });

  } catch (error) {
    console.error("Error processing file:", error);
    throw error;
  }
});

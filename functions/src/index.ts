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
  Project,
  ProjectTemplate,
  ProjectTemplateStep,
  ReferenceDocument,
  ProjectStep,
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
  const projectDoc = await admin.firestore()
    .collection('users')
    .doc(userId)
    .collection('projects')
    .doc(projectId)
    .get();

  if (!projectDoc.exists) return null;

  const data = projectDoc.data();
  if (!data || !Array.isArray(data.steps)) return null;

  const project = {
    ...data,
    id: projectDoc.id,
    createdAt: data.createdAt?.toDate(),
    updatedAt: data.updatedAt?.toDate(),
    steps: data.steps.map((step: any) => ({
      ...step,
      createdAt: step.createdAt?.toDate(),
      conversations: step.conversations?.map((conv: any) => ({
        ...conv,
        createdAt: conv.createdAt?.toDate()
      })) || []
    }))
  } as Project;

  return project.steps.find(step => step.id === stepId) || null;
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

    const { projectId, stepId, selectedPrompt } = req.body;
    if (!projectId || !stepId || !selectedPrompt) {
      res.status(400).send('Missing required parameters');
      return;
    }

    const step = await getProjectStep(userId, projectId, stepId);
    if (!step) {
      res.status(404).send('Step not found');
      return;
    }

    // 直近の会話履歴を取得（最大5件）
    const recentConversations = step.conversations
      .slice(-5)
      .map(conv => `${conv.role}: ${conv.content}`)
      .join('\n');

    // ストリーミングレスポンスの設定
    setStreamingResponse(res);

    const chat = model.startChat({
      history: [],
      safetySettings,
    });

    // 会話履歴とプロンプトを結合
    const fullPrompt = `
Recent conversations:
${recentConversations}

Selected Prompt: ${selectedPrompt}`;

    const result = await chat.sendMessageStream(fullPrompt);

    for await (const chunk of result.stream) {
      const text = chunk.text();
      res.write(`data: ${JSON.stringify({ text })}\n\n`);
    }

    res.end();
  } catch (error) {
    console.error('Error in generateExampleResponse:', error);
    res.status(500).send('Internal server error');
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

    // 会話履歴全体を取得
    const conversationHistory = step.conversations
      .map(conv => `${conv.role}: ${conv.content}`)
      .join('\n');

    // ストリーミングレスポンスの設定
    setStreamingResponse(res);

    const chat = model.startChat({
      history: [],
      safetySettings,
    });

    // 会話履歴と成果物生成指示を結合
    const fullPrompt = `
Conversation History:
${conversationHistory}

Artifact Generation Instructions:
${step.templateStepId}

Please generate the artifact based on the above context.`;

    const result = await chat.sendMessageStream(fullPrompt);

    for await (const chunk of result.stream) {
      const text = chunk.text();
      res.write(`data: ${JSON.stringify({ text })}\n\n`);
    }

    res.end();
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

      const template = doc.data() as ProjectTemplate;
      const steps = template.steps || [];

      // 該当するステップの更新
      const updatedSteps = steps.map((step: ProjectTemplateStep) => {
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

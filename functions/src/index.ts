import { setGlobalOptions } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";
import { onObjectFinalized } from "firebase-functions/v2/storage";
import * as admin from "firebase-admin";
import { Request, Response } from "express";
import { validateAuth } from "./middleware/auth";
import {
  handleChatWithContext,
  handleGenerateExampleResponse,
  handleGenerateArtifact
} from "./controllers/chat";
import { handleFileUploaded } from "./controllers/storage";

// Cloud Functions のグローバル設定
setGlobalOptions({
  maxInstances: 10,
  memory: "2GiB",
  timeoutSeconds: 540,
  region: "us-west1"
});

// Firebase Admin初期化
admin.initializeApp();

// ミドルウェア付きのハンドラー作成
const createAuthenticatedHandler = (handler: (req: Request, res: Response) => Promise<void>) => {
  return async (req: Request, res: Response) => {
    try {
      await validateAuth(req, res, () => handler(req, res));
    } catch (error) {
      console.error('Error in authenticated handler:', error);
      res.status(500).send('Internal server error');
    }
  };
};

// HTTPエンドポイントの定義
export const chatWithContext = onRequest(
  { cors: true },
  createAuthenticatedHandler(handleChatWithContext)
);

export const generateExampleResponse = onRequest(
  { cors: true },
  createAuthenticatedHandler(handleGenerateExampleResponse)
);

export const generateArtifact = onRequest(
  { cors: true },
  createAuthenticatedHandler(handleGenerateArtifact)
);

// Storage Triggerの定義
export const onFileUploaded = onObjectFinalized({
  memory: "2GiB",
  timeoutSeconds: 540,
  region: "us-west1"
}, handleFileUploaded);

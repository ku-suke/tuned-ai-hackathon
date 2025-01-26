import { onObjectFinalized, StorageEvent } from "firebase-functions/v2/storage";
import { setGlobalOptions } from "firebase-functions/v2";
import * as admin from "firebase-admin";
import { Storage } from "@google-cloud/storage";
import type { ProjectTemplate, ProjectTemplateStep, ReferenceDocument } from "./types/firestore";

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

/**
 * ファイルからテキストを抽出する関数
 */
async function extractText(bucket: string, filePath: string, contentType: string): Promise<string> {
  const file = storage.bucket(bucket).file(filePath);
  const [fileContent] = await file.download();

  if (contentType === "application/pdf") {
    // pdf-parseの動的インポート
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

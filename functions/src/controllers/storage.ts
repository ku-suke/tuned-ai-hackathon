import { StorageEvent } from "firebase-functions/v2/storage";
import { firestoreService } from "../services/firestore";
import { storageService } from "../services/storage";
import { ReferenceDocument } from "../types/firestore";

export async function handleFileUploaded(event: StorageEvent) {
  const fileBucket = event.data.bucket;
  const filePath = event.data.name;
  const contentType = event.data.contentType;

  if (!filePath || !contentType) {
    throw new Error("File path or content type is missing");
  }

  try {
    // パスの解析
    const { userId, templateId, stepId } = storageService.parseFilePath(filePath);

    // テキストの抽出
    const extractedText = await storageService.extractText(fileBucket, filePath, contentType);
    // 1024x1024バイト以下に切る
    const truncatedText = extractedText.slice(0, 1024 * 1024);

    // 新しいリファレンスドキュメントの作成
    const newDoc: ReferenceDocument = {
      id: filePath, // Storage内のパスをIDとして使用
      title: event.data.name.split("/").pop() || "Uploaded document",
      parsed: true,
      content: truncatedText,
      type: contentType.startsWith("application/pdf") ? "pdf" : "text"
    };

    // テンプレートの更新
    const updated = await firestoreService.updateTemplateWithNewDocument(
      userId,
      templateId,
      stepId,
      newDoc
    );

    if (!updated) {
      throw new Error("Failed to update template");
    }

  } catch (error) {
    console.error("Error processing file:", error);
    throw error;
  }
}
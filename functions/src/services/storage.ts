import { Storage } from "@google-cloud/storage";

export class StorageService {
  private storage: Storage;

  constructor() {
    this.storage = new Storage();
  }

  /**
   * ファイルからテキストを抽出
   */
  async extractText(bucket: string, filePath: string, contentType: string): Promise<string> {
    const file = this.storage.bucket(bucket).file(filePath);
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
   * Firestoreのドキュメントパスを解析
   */
  parseFilePath(filePath: string): {
    userId: string;
    templateId: string;
    stepId: string;
    fileName: string;
  } {
    const match = filePath.match(/users\/(.+?)\/projectTemplates\/(.+?)\/steps\/(.+?)\/(.+)/);
    if (!match) throw new Error(`Invalid file path: ${filePath}`);

    const [, userId, templateId, stepId, fileName] = match;
    return { userId, templateId, stepId, fileName };
  }

  /**
   * ストリームレスポンスの設定
   */
  setStreamingResponse(response: any): void {
    response.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
  }
}

export const storageService = new StorageService();
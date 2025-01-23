"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = __importStar(require("firebase-admin"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// サービスアカウントキーのパスを絶対パスで指定
const serviceAccount = require(path.join(process.cwd(), 'serviceAccountKey.json'));
// Firebase Admin SDKの初期化
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
function importMockData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // モックデータの読み込み
            const mockDataPath = path.join(process.cwd(), 'src/mocks/mockData.json');
            const mockData = JSON.parse(fs.readFileSync(mockDataPath, 'utf8'));
            // バッチ処理の準備
            const batch = db.batch();
            // ユーザーデータのインポート
            for (const user of mockData.users) {
                const userRef = db.collection('users').doc(user.id);
                batch.set(userRef, {
                    email: user.email,
                    displayName: user.displayName,
                    createdAt: admin.firestore.Timestamp.fromDate(new Date(user.createdAt))
                });
                // ユーザーのプロジェクトテンプレート（サブコレクション）のインポート
                const userTemplates = mockData['users/' + user.id + '/projectTemplates'] || [];
                for (const template of userTemplates) {
                    const templateRef = userRef.collection('projectTemplates').doc(template.id);
                    batch.set(templateRef, Object.assign(Object.assign({}, template), { createdAt: admin.firestore.Timestamp.fromDate(new Date(template.createdAt)), updatedAt: admin.firestore.Timestamp.fromDate(new Date(template.updatedAt)) }));
                }
            }
            // 公開テンプレートのインポート
            for (const template of mockData.publishedTemplates) {
                const publishedTemplateRef = db.collection('publishedTemplates').doc(template.id);
                batch.set(publishedTemplateRef, Object.assign(Object.assign({}, template), { publishedAt: admin.firestore.Timestamp.fromDate(new Date(template.publishedAt)), updatedAt: admin.firestore.Timestamp.fromDate(new Date(template.updatedAt)) }));
            }
            // プロジェクトのインポート
            for (const project of mockData.projects) {
                const projectRef = db.collection('projects').doc(project.id);
                batch.set(projectRef, Object.assign(Object.assign({}, project), { createdAt: admin.firestore.Timestamp.fromDate(new Date(project.createdAt)), updatedAt: admin.firestore.Timestamp.fromDate(new Date(project.updatedAt)), steps: project.steps.map((step) => (Object.assign(Object.assign({}, step), { conversations: step.conversations.map((conv) => (Object.assign(Object.assign({}, conv), { createdAt: admin.firestore.Timestamp.fromDate(new Date(conv.createdAt)) }))), artifact: step.artifact ? Object.assign(Object.assign({}, step.artifact), { createdAt: admin.firestore.Timestamp.fromDate(new Date(step.artifact.createdAt)) }) : null }))) }));
            }
            // バッチ処理の実行
            yield batch.commit();
            console.log('モックデータのインポートが完了しました');
        }
        catch (error) {
            console.error('エラーが発生しました:', error);
            process.exit(1);
        }
        // Firebase Admin SDKの切断
        admin.app().delete();
    });
}
// スクリプトの実行
importMockData();
//# sourceMappingURL=importMockData.js.map
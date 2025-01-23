import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';

// サービスアカウントキーのパスを絶対パスで指定
const serviceAccount = require(path.join(process.cwd(), 'serviceAccountKey.json'));

// Firebase Admin SDKの初期化
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function importMockData() {
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
        batch.set(templateRef, {
          ...template,
          createdAt: admin.firestore.Timestamp.fromDate(new Date(template.createdAt)),
          updatedAt: admin.firestore.Timestamp.fromDate(new Date(template.updatedAt))
        });
      }
    }

    // 公開テンプレートのインポート
    for (const template of mockData.publishedTemplates) {
      const publishedTemplateRef = db.collection('publishedTemplates').doc(template.id);
      batch.set(publishedTemplateRef, {
        ...template,
        publishedAt: admin.firestore.Timestamp.fromDate(new Date(template.publishedAt)),
        updatedAt: admin.firestore.Timestamp.fromDate(new Date(template.updatedAt))
      });
    }

    // プロジェクトのインポート
    for (const project of mockData.projects) {
      const projectRef = db.collection('projects').doc(project.id);
      batch.set(projectRef, {
        ...project,
        createdAt: admin.firestore.Timestamp.fromDate(new Date(project.createdAt)),
        updatedAt: admin.firestore.Timestamp.fromDate(new Date(project.updatedAt)),
        steps: project.steps.map((step: any) => ({
          ...step,
          conversations: step.conversations.map((conv: any) => ({
            ...conv,
            createdAt: admin.firestore.Timestamp.fromDate(new Date(conv.createdAt))
          })),
          artifact: step.artifact ? {
            ...step.artifact,
            createdAt: admin.firestore.Timestamp.fromDate(new Date(step.artifact.createdAt))
          } : null
        }))
      });
    }

    // バッチ処理の実行
    await batch.commit();
    console.log('モックデータのインポートが完了しました');

  } catch (error) {
    console.error('エラーが発生しました:', error);
    process.exit(1);
  }

  // Firebase Admin SDKの切断
  admin.app().delete();
}

// スクリプトの実行
importMockData();
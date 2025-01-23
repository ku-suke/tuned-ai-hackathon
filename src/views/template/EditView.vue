<template>
  <div class="template-edit">
    <header class="header">
      <h1>プロジェクトテンプレートの編集</h1>
      <div class="header-actions">
        <button class="cancel-button">キャンセル</button>
        <button class="save-button">保存</button>
      </div>
    </header>

    <div class="content">
      <div class="basic-info">
        <div class="form-group">
          <label>テンプレート名</label>
          <input type="text" placeholder="テンプレート名を入力" value="マーケティング調査プロジェクト">
        </div>
        <div class="form-group">
          <label>説明</label>
          <textarea placeholder="テンプレートの説明を入力">マーケティング施策の効果を分析し、改善案を導き出すためのプロジェクトテンプレートです。</textarea>
        </div>
      </div>

      <div class="steps-section">
        <div class="section-header">
          <h2>ステップ</h2>
          <button class="add-step-button">ステップを追加</button>
        </div>

        <div class="steps-list">
          <div class="step-item" v-for="i in 3" :key="i">
            <div class="step-header">
              <h3>ステップ {{ i }}</h3>
              <button class="delete-step-button">削除</button>
            </div>
            
            <div class="step-content">
              <div class="form-group">
                <label>システムプロンプト</label>
                <textarea placeholder="AIに対するシステムプロンプトを入力">あなたはマーケティング分析の専門家です。データに基づいて施策の効果を分析し、改善案を提案してください。</textarea>
              </div>

              <div class="form-group">
                <label>ユーザー選択肢プロンプト (オプション)</label>
                <textarea placeholder="ユーザーが選択できる選択肢のプロンプトを入力">分析したい施策を選択してください：
1. Web広告
2. SNSマーケティング
3. メールマーケティング
4. コンテンツマーケティング</textarea>
              </div>

              <div class="form-group">
                <label>成果物生成プロンプト</label>
                <textarea placeholder="成果物を生成するためのプロンプトを入力">これまでの会話を踏まえて、以下の形式でレポートを作成してください：

1. 現状分析
2. 課題の特定
3. 改善案の提案
4. 期待される効果</textarea>
              </div>

              <div class="form-group">
                <label>固定参照ドキュメント</label>
                <div class="document-upload">
                  <button class="upload-button">アップロード</button>
                  <p class="upload-note">PDFまたはテキストファイル</p>
                </div>
                <div class="document-list">
                  <div class="document-item">
                    <span>marketing_data_2024.pdf</span>
                    <button class="remove-document">削除</button>
                  </div>
                  <div class="document-item">
                    <span>previous_analysis.pdf</span>
                    <button class="remove-document">削除</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.template-edit {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.header {
  background-color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.content {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.steps-section {
  margin-top: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.step-item {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.document-upload {
  border: 2px dashed #ddd;
  padding: 1rem;
  text-align: center;
  border-radius: 4px;
}

.document-list {
  margin-top: 1rem;
}

.document-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.save-button {
  background-color: #4CAF50;
  color: white;
}

.cancel-button {
  background-color: #6c757d;
  color: white;
}

.add-step-button {
  background-color: #007bff;
  color: white;
}

.delete-step-button {
  background-color: #dc3545;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.upload-button {
  background-color: #6c757d;
  color: white;
  margin-bottom: 0.5rem;
}

.upload-note {
  color: #666;
  margin: 0;
  font-size: 0.875rem;
}

.remove-document {
  background-color: #dc3545;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
}

h2 {
  margin: 0;
  font-size: 1.25rem;
}

h3 {
  margin: 0;
  font-size: 1.1rem;
}
</style>
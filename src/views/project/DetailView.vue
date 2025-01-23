<template>
  <div class="project-detail">
    <header class="header">
      <h1>マーケティング調査プロジェクト</h1>
      <button class="back-button">ダッシュボードに戻る</button>
    </header>

    <div class="main-content">
      <!-- 左カラム: ステップ一覧 -->
      <div class="steps-column">
        <h2 class="column-title">ステップ</h2>
        <div class="steps-list">
          <div class="step-item completed">
            <div class="step-header">
              <span class="step-number">1</span>
              <h3>現状分析</h3>
            </div>
            <div class="step-summary">
              <span class="artifact-icon">📄</span>
              <span class="summary-text">KPIの分析完了</span>
            </div>
          </div>

          <div class="step-item active">
            <div class="step-header">
              <span class="step-number">2</span>
              <h3>課題抽出</h3>
            </div>
            <div class="step-summary">
              <span class="artifact-icon">📝</span>
              <span class="summary-text">進行中...</span>
            </div>
          </div>

          <div class="step-item">
            <div class="step-header">
              <span class="step-number">3</span>
              <h3>改善案の作成</h3>
            </div>
            <div class="step-summary">
              <span class="artifact-icon">🔄</span>
              <span class="summary-text">未着手</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 中央カラム: チャット -->
      <div class="chat-column">
        <div class="chat-container">
          <div class="chat-messages">
            <div class="message system">
              あなたはマーケティング分析の専門家です。データに基づいて施策の効果を分析し、改善案を提案してください。
            </div>
            <div class="message assistant">
              承知しました。まずは現在の状況を確認させていただきます。分析したい施策を以下から選択してください：

              1. Web広告
              2. SNSマーケティング
              3. メールマーケティング
              4. コンテンツマーケティング
            </div>
            <div class="message user">
              2. SNSマーケティングについて分析をお願いします。
            </div>
            <div class="message assistant">
              SNSマーケティングの分析を行います。提供された資料によると...
            </div>
          </div>

          <div class="chat-input">
            <div class="preset-buttons">
              <button class="preset-button">Web広告</button>
              <button class="preset-button">SNSマーケティング</button>
              <button class="preset-button">メールマーケティング</button>
            </div>
            <div class="input-container">
              <textarea placeholder="メッセージを入力..."></textarea>
              <button class="send-button">送信</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 右カラム: ドキュメント -->
      <div class="documents-column">
        <div class="documents-section">
          <h2 class="column-title">参照ドキュメント</h2>
          <div class="document-list">
            <div class="document-item">
              <div class="document-info">
                <span class="document-name">marketing_data_2024.pdf</span>
                <label class="toggle">
                  <input type="checkbox" checked>
                  <span class="slider"></span>
                </label>
              </div>
              <p class="document-summary">15ページ, 2024年1月のマーケティングデータ</p>
            </div>
            <div class="document-item">
              <div class="document-info">
                <span class="document-name">previous_analysis.pdf</span>
                <label class="toggle">
                  <input type="checkbox">
                  <span class="slider"></span>
                </label>
              </div>
              <p class="document-summary">8ページ, 過去の分析レポート</p>
            </div>
          </div>
        </div>

        <div class="artifacts-section">
          <h2 class="column-title">生成された成果物</h2>
          <div class="artifact-list">
            <div class="artifact-item">
              <h4>現状分析レポート</h4>
              <p class="artifact-summary">2,500文字</p>
              <button class="view-button">表示</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-detail {
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

.main-content {
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  gap: 1rem;
  height: calc(100vh - 64px);
  padding: 1rem;
}

/* 左カラム: ステップ */
.steps-column {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step-item {
  padding: 1rem;
  border-radius: 4px;
  background-color: #f8f9fa;
}

.step-item.completed {
  border-left: 4px solid #4CAF50;
}

.step-item.active {
  border-left: 4px solid #007bff;
  background-color: #f0f7ff;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.step-number {
  background-color: #6c757d;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
}

.step-summary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #666;
}

/* 中央カラム: チャット */
.chat-column {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.message {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 4px;
  max-width: 80%;
}

.message.system {
  background-color: #f8f9fa;
  margin-left: auto;
  margin-right: auto;
  color: #666;
}

.message.assistant {
  background-color: #f0f7ff;
  margin-right: auto;
}

.message.user {
  background-color: #e9ecef;
  margin-left: auto;
}

.chat-input {
  padding: 1rem;
  border-top: 1px solid #ddd;
}

.preset-buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.preset-button {
  padding: 0.25rem 0.75rem;
  background-color: #e9ecef;
  border: none;
  border-radius: 16px;
  font-size: 0.875rem;
  cursor: pointer;
}

.input-container {
  display: flex;
  gap: 0.5rem;
}

.input-container textarea {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  height: 80px;
}

/* 右カラム: ドキュメント */
.documents-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.documents-section,
.artifacts-section {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.document-list,
.artifact-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.document-item,
.artifact-item {
  padding: 0.75rem;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.document-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.document-name {
  font-weight: 500;
}

.document-summary,
.artifact-summary {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
}

/* トグルスイッチ */
.toggle {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #4CAF50;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

/* ボタン */
.back-button {
  padding: 0.5rem 1rem;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.send-button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.view-button {
  padding: 0.25rem 0.5rem;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
}

/* タイトル */
.column-title {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  color: #333;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
}

h3 {
  margin: 0;
  font-size: 1rem;
}

h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
}
</style>
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
/* スコープ付きCSSを削除し、共通クラスを使用 */
</style>
<template>
  <div class="login-view">
    <div class="login-container">
      <h1>TunedAI</h1>
      <p class="description">AIを活用したプロジェクトテンプレート管理ツール</p>
      <div class="login-box">
        <button class="login-button">
          ログイン
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-view {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.login-container {
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.description {
  color: #666;
  margin-bottom: 2rem;
}

.login-box {
  padding: 1rem;
}

.login-button {
  background-color: #4CAF50;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #45a049;
}
</style>
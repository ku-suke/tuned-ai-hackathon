<template>
  <div class="dashboard">
    <header class="header">
      <h1>Dashboard</h1>
      <button class="logout-button">ログアウト</button>
    </header>

    <div class="content">
      <section class="templates">
        <div class="section-header">
          <h2>プロジェクトテンプレート</h2>
          <button class="create-button">新規作成</button>
        </div>
        <div class="template-list">
          <div class="template-card" v-for="i in 3" :key="i">
            <h3>テンプレート {{ i }}</h3>
            <p>説明文がここに入ります</p>
            <div class="card-actions">
              <button class="action-button edit">編集</button>
              <button class="action-button delete">削除</button>
            </div>
          </div>
        </div>
      </section>

      <section class="projects">
        <div class="section-header">
          <h2>プロジェクト</h2>
          <button class="create-button">新規作成</button>
        </div>
        <div class="project-list">
          <div class="project-card" v-for="i in 3" :key="i">
            <h3>プロジェクト {{ i }}</h3>
            <p>最終更新: 2024/01/23</p>
            <div class="card-actions">
              <button class="action-button view">表示</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
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

.logout-button {
  padding: 0.5rem 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.create-button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.template-list,
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.template-card,
.project-card {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.action-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;
}

.action-button.edit {
  background-color: #ffc107;
  color: #000;
}

.action-button.delete {
  background-color: #dc3545;
  color: white;
}

.action-button.view {
  background-color: #007bff;
  color: white;
}

section {
  margin-bottom: 2rem;
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
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

p {
  margin: 0;
  color: #666;
}
</style>
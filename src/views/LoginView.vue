<template>
  <div class="login-view">
    <div class="login-container">
      <h1>TunedAI</h1>
      <p class="description">AIを活用したプロジェクトテンプレート管理ツール</p>
      <div class="login-box">
        <button class="login-button" @click="handleGoogleLogin">
          <img src="https://www.google.com/favicon.ico" alt="Google" class="google-icon" />
          Googleでログイン
        </button>
        <p v-if="error" class="error-message">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/main'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const router = useRouter()
const error = ref('')

const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    router.push('/dashboard')
  } catch (e) {
    error.value = 'ログインに失敗しました。もう一度お試しください。'
    console.error('Login error:', e)
  }
}
</script>

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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #4285f4;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #357abd;
}

.google-icon {
  width: 18px;
  height: 18px;
}

.error-message {
  color: #dc3545;
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>
<template>
  <div class="page-center">
    <div class="card text-center p-md">
      <h1 class="text-xl text-dark mb-md">TunedAI</h1>
      <p class="text-gray mb-lg">AIを活用したプロジェクトテンプレート管理ツール</p>
      <div class="p-md">
        <button class="btn btn-google" @click="handleGoogleLogin">
          <img src="https://www.google.com/favicon.ico" alt="Google" class="google-icon" />
          Googleでログイン
        </button>
        <p v-if="error" class="text-error mt-sm">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '@/main'
import { GoogleAuthProvider, signInWithPopup, User as FirebaseUser } from 'firebase/auth'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import type { User } from '@/types/firestore'

const router = useRouter()
const error = ref('')

const createOrUpdateUser = async (firebaseUser: FirebaseUser) => {
  const userRef = doc(db, 'users', firebaseUser.uid)
  const userSnap = await getDoc(userRef)
  
  if (!userSnap.exists()) {
    const userData: User = {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      displayName: firebaseUser.displayName || '',
      createdAt: serverTimestamp() as unknown as Date
    }
    await setDoc(userRef, userData)
  }
}

const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    await createOrUpdateUser(result.user)
    router.push('/dashboard')
  } catch (e) {
    error.value = 'ログインに失敗しました。もう一度お試しください。'
    console.error('Login error:', e)
  }
}
</script>

<style scoped>
/* スコープ付きCSSを削除し、共通クラスを使用 */
</style>
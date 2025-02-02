import { defineConfig } from 'vitest/config'
import * as fs from 'fs'
import * as path from 'path'

// .envファイルから環境変数を読み込む
const envPath = path.resolve(__dirname, '.env')
const envContent = fs.readFileSync(envPath, 'utf-8')
const envVars = Object.fromEntries(
  envContent
    .split('\n')
    .filter(Boolean)
    .map(line => {
      const [key, ...valueParts] = line.split('=')
      const value = valueParts.join('=').replace(/^["']|["']$/g, '')
      return [key, value]
    })
)

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    env: envVars, // 環境変数を直接設定
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.d.ts', 'src/**/*.test.ts']
    }
  }
})
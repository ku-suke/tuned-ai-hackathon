# ビルドステージ
FROM node:20-slim AS builder

WORKDIR /app

# パッケージファイルをコピー
COPY package*.json ./
COPY tsconfig.json ./

# 依存関係のインストールとビルド
RUN npm ci
COPY src/ src/
RUN npm run build

# 本番ステージ
FROM node:20-slim

WORKDIR /app

# 本番依存関係のみをインストール
COPY package*.json ./
RUN npm ci --only=production

# ビルド済みのアプリケーションをコピー
COPY --from=builder /app/dist ./dist

# Cloud Runで使用されるポート8080を公開
ENV PORT=8080
EXPOSE 8080

# アプリケーションを起動
CMD ["node", "dist/server.js"]
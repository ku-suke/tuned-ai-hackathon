<template>
  <div class="markdown-preview" v-html="renderedContent"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const props = defineProps<{
  content: string
}>()

const renderedContent = computed(() => {
  // まずマークダウンをHTMLに変換
  const html = marked(props.content, {
    gfm: true,
    breaks: true
  })

  // コードブロックにシンタックスハイライトを適用
  if (typeof document !== 'undefined') {
    setTimeout(() => {
      const preElements = document.querySelectorAll('.markdown-preview pre code')
      preElements.forEach((el) => {
        hljs.highlightElement(el as HTMLElement)
      })
    }, 0)
  }

  return html
})
</script>

<style scoped>
.markdown-preview {
  line-height: 1.6;
  color: #24292e;
}

.markdown-preview :deep(h1) {
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 2em;
  font-weight: 600;
}

.markdown-preview :deep(h2) {
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 1.5em;
  font-weight: 600;
}

.markdown-preview :deep(h3) {
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 1.25em;
  font-weight: 600;
}

.markdown-preview :deep(p) {
  margin-top: 0;
  margin-bottom: 16px;
}

.markdown-preview :deep(code) {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(27,31,35,0.05);
  border-radius: 6px;
}

.markdown-preview :deep(pre) {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 6px;
}

.markdown-preview :deep(pre code) {
  padding: 0;
  margin: 0;
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-preview :deep(ul), .markdown-preview :deep(ol) {
  padding-left: 2em;
  margin-top: 0;
  margin-bottom: 16px;
}

.markdown-preview :deep(blockquote) {
  padding: 0 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
  margin: 0 0 16px 0;
}

.markdown-preview :deep(table) {
  border-spacing: 0;
  border-collapse: collapse;
  margin-bottom: 16px;
}

.markdown-preview :deep(table th), .markdown-preview :deep(table td) {
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
}

.markdown-preview :deep(table tr:nth-child(2n)) {
  background-color: #f6f8fa;
}
</style>
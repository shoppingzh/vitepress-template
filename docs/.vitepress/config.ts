import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  appearance: true,
  title: 'Vitepress Template',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    lastUpdatedText: '最近更新于：',
    outlineTitle: '目录',
    nav: [{
      text: '快速开始',
      link: '/start.md'
    }],

  }
})

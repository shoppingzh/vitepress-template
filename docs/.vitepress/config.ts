import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vitepress Template',
  description: 'Vitepress documentation template project',

  themeConfig: {
    nav: [{
      text: '快速开始',
      link: '/start.md'
    }],

  }
})

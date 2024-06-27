import Theme from 'vitepress/theme'
import type { Theme as ThemeType } from 'vitepress'
import ui from '@/plugins/element-ui'
import components from '@/components'
import '@/styles/index.css'
import 'virtual:svg-icons-register'
import Layout from '@/layout/index.vue'

export default {
  extends: Theme,
  Layout,
  enhanceApp(ctx) {
    const { app } = ctx

    Theme.enhanceApp(ctx)
    app.use(ui as any)
    app.use(components as any)
  }
} satisfies ThemeType

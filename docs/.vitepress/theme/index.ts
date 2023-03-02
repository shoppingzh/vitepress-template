import Theme from 'vitepress/theme'
import ui from '@/plugins/element-ui'
import components from '@/components'
import '@/styles/index.css'
import 'virtual:svg-icons-register'
import Layout from '@/layout/index.vue'

export default {
  ...Theme,
  Layout,
  enhanceApp(ctx) {
    const { app } = ctx;

    Theme.enhanceApp(ctx);
    app.use(ui)
    app.use(components)
  }
}

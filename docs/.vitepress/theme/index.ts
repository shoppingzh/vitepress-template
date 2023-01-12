import Theme from 'vitepress/theme'
import ui from '@/plugins/element-ui'
import components from '@/components'
import '@/styles/index.css'
import 'virtual:svg-icons-register'

export default {
  ...Theme,
  enhanceApp(ctx) {
    const { app } = ctx;

    Theme.enhanceApp(ctx);
    app.use(ui)
    app.use(components)
  }
}

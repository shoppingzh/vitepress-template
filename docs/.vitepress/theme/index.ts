import Theme from 'vitepress/theme'
import ui from '@/plugins/element-ui'
import components from '@/components'
import '@/styles/index.css'
import 'virtual:svg-icons-register'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ui)
    app.use(components)
  }
}

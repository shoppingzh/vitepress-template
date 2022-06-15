import { App } from 'vue'
import { Button, Tag } from 'ant-design-vue'
import 'ant-design-vue/lib/button/style/index.css'
import 'ant-design-vue/lib/tag/style/index.css'

const components = [
  Button,
  Tag
]

export default function(app: App) {
  components.forEach(component => {
    app.use(component)
  })
}

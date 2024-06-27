import path from 'node:path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default {
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '.') }
    ]
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [
        path.resolve(__dirname, './icons')
      ],
      symbolId: 'svg-icon/[name]',
    }),
  ],
}

import { resolve } from 'path'
import { UserConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default {
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './.vitepress')}
    ]
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [
        resolve(__dirname, './.vitepress/icons')
      ],
      symbolId: 'svg-icon/[name]',
    }),
  ],
} as UserConfig

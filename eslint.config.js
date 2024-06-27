import javascript from '@shoppingzh/eslint-config/javascript'
import stylistic from '@shoppingzh/eslint-config/stylistic'
import typescript from '@shoppingzh/eslint-config/typescript'
import vue from '@shoppingzh/eslint-config/vue'

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  {
    ignores: ['docs/.vitepress/cache', 'docs/.vitepress/dist']
  },
  ...javascript(),
  ...stylistic(),
  ...typescript({
    files: [
      '**/*.?([cm])[jt]s?(x)',
      '**/*.vue',
    ],
    overrides: {
      '@typescript-eslint/no-explicit-any': [1],
    }
  }),
  ...vue({
    typescript: true,
  }),
]

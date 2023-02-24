# 快速入手

## 🚀 特性

- 默认配置
  - logo
  - 标签页logo
  - 目录层级
- 自动生成导航栏与侧边栏
- 组件库：element-plus
- 原子化CSS：TailwindCSS
- SVG图标（自动拉取iconfont）
- 组件自动注册
- 自定义vite配置
- 全局布局自定义
- 返回顶部

## ✈️ 下载并使用

**下载**

```bash
git clone https://github.com/shoppingzh/vitepress-template.git
```

**使用时，请对以下内容进行修改：**

- 修改 `package.json`，重写 `name` / `version` / `description` / `repository` / `author` 等字段
- 打开 `docs/.vitepess/config.ts`，修改：
  - `title`：网站标题
  - `nav` / `sidebar`：导航栏与侧边栏
- 替换 `docs/public/logo.svg` 文件
- 重写 `docs/index.md`，设计自己的首页
- 根据需要删除无用文档，新增自己的文档
# VuePress 个人博客

一个基于 VuePress 2.0 构建的现代化个人博客网站，用于分享技术文章和学习笔记。

## 📋 项目简介

这是一个使用 VuePress 2.0 构建的个人博客项目，支持：

- 📝 Markdown 文章编写
- 🎨 现代化主题设计
- 📱 响应式布局
- 🔍 全文搜索
- 📊 文章分类和标签
- 🚀 快速构建和部署

## 🛠️ 技术栈

- **VuePress 2.0** - 静态站点生成器
- **Vue 3** - 前端框架
- **Vite** - 构建工具
- **Sass** - CSS 预处理器
- **pnpm** - 包管理器

## 📁 项目结构

```
vuepress-starter/
├── docs/                    # 文档目录
│   ├── posts/              # 博客文章
│   │   └── vue源码1.md     # 示例文章
│   ├── get-started.md      # 开始指南
│   └── README.md          # 站点首页配置
├── node_modules/          # 依赖包
├── package.json           # 项目配置
├── pnpm-lock.yaml        # 依赖锁定文件
└── README.md             # 项目说明文档
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16
- pnpm (推荐) 或 npm

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

### 开发模式

```bash
# 启动开发服务器
pnpm docs:dev

# 清理缓存后启动
pnpm docs:clean-dev
```

访问 `http://localhost:8080` 查看网站。

### 构建生产版本

```bash
# 构建静态文件
pnpm docs:build
```

构建完成后，静态文件将生成在 `docs/.vuepress/dist` 目录中。

## 📝 写作指南

### 添加新文章

1. 在 `docs/posts/` 目录下创建新的 Markdown 文件
2. 在文件头部添加 frontmatter 配置：

```yaml
---
date: 2024-01-01
category:
  - 前端
  - 后端
tag:
  - JavaScript
  - Vue
---
```

### 文章分类

- 在 `category` 字段中设置文章分类
- 在 `tag` 字段中设置文章标签
- 支持多级分类和多个标签

## 🎨 自定义配置

### 主题配置

项目使用 VuePress 默认主题，支持丰富的自定义选项：

- 导航栏配置
- 侧边栏配置
- 首页布局
- 颜色主题

### 样式自定义

可以通过以下方式自定义样式：

1. 创建 `.vuepress/styles/index.scss` 文件
2. 在组件中使用 Vue 的 scoped 样式
3. 修改主题配置文件

## 📦 依赖管理

项目使用 pnpm 作为包管理器，主要依赖包括：

- `vuepress`: 2.0.0-rc.20
- `@vuepress/theme-default`: 2.0.0-rc.88
- `@vuepress/bundler-vite`: 2.0.0-rc.20
- `@vuepress/plugin-blog`: 2.0.0-rc.86

## 🚀 部署

### GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 设置构建源为 GitHub Actions
4. 创建 `.github/workflows/deploy.yml` 工作流文件

### 其他平台

- **Vercel**: 连接 GitHub 仓库，自动部署
- **Netlify**: 拖拽 `dist` 文件夹或连接 Git 仓库
- **阿里云 OSS**: 上传 `dist` 文件夹内容

## 📚 学习资源

- [VuePress 官方文档](https://vuejs.press/)
- [VuePress 主题配置](https://vuejs.press/reference/default-theme/)
- [Markdown 语法指南](https://vuejs.press/guide/markdown.html)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

本项目基于 MIT 许可证开源。

---

**用心分享，共同成长** | Copyright © 2024

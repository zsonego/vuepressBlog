import comp from "E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"欢迎来到我的博客\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"欢迎来到我的博客\",\"heroImage\":\"http://www.zstop.top:3000/uploads/1761203400880-882837178.png\",\"heroText\":null,\"tagline\":\"分享技术与思考\",\"actions\":[{\"text\":\"开始阅读\",\"link\":\"/article/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"技术分享\",\"details\":\"分享最新的技术文章，包括前端、后端、数据库等各个领域的学习心得。\"},{\"title\":\"学习笔记\",\"details\":\"整理学习过程中的重要笔记，帮助自己和他人更好地理解知识点。\"},{\"title\":\"经验总结\",\"details\":\"总结项目开发中的经验教训，避免重复踩坑。\"}],\"footer\":\"用心分享，共同成长 | Copyright © 2024\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

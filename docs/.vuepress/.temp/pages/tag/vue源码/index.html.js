import comp from "E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/tag/vue源码/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/vue%E6%BA%90%E7%A0%81/\",\"title\":\"Tag vue源码\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Tag vue源码\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"vue源码\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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

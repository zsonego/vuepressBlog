import comp from "E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/category/前端/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/%E5%89%8D%E7%AB%AF/\",\"title\":\"Category 前端\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Category 前端\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"前端\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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

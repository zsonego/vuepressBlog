import comp from "E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/posts/vue源码1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/vue%E6%BA%90%E7%A0%811.html\",\"title\":\"vue 源码学习第一天\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2025-10-23T00:00:00.000Z\",\"category\":[\"前端\"],\"tag\":[\"vue源码\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/vue源码1.md\",\"excerpt\":\"\\n\"}")
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

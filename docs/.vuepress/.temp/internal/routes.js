export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"欢迎来到我的博客"} }],
  ["/posts/vue%E6%BA%90%E7%A0%811.html", { loader: () => import(/* webpackChunkName: "posts_vue源码1.html" */"E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/posts/vue源码1.html.js"), meta: {"_blog":{"title":"vue 源码学习第一天","author":"","date":"2025-10-23T00:00:00.000Z","category":["前端"],"tag":["vue源码"],"excerpt":"\n"},"title":"vue 源码学习第一天"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
  ["/category/%E5%89%8D%E7%AB%AF/", { loader: () => import(/* webpackChunkName: "category_前端_index.html" */"E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/category/前端/index.html.js"), meta: {"title":"Category 前端"} }],
  ["/tag/vue%E6%BA%90%E7%A0%81/", { loader: () => import(/* webpackChunkName: "tag_vue源码_index.html" */"E:/Desktop/desktopUseful/vuepress-starter/docs/.vuepress/.temp/pages/tag/vue源码/index.html.js"), meta: {"title":"Tag vue源码"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

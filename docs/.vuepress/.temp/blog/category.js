export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"前端\":{\"path\":\"/category/%E5%89%8D%E7%AB%AF/\",\"indexes\":[0]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"vue源码\":{\"path\":\"/tag/vue%E6%BA%90%E7%A0%81/\",\"indexes\":[0]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });


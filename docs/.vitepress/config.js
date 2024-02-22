// import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

export default {
  title: "blog",
  description: "Just playing around.",
  base: "/blog/",
  themeConfig: {
    siteTitle: "Blog",
    nav: [{ text: "GitHub", link: "https://github.com/gamgmg/blog" }],
    sidebar: [
      {
        text: "h5组件库",
        link: "https://gamgmg.github.io/h5-component/",
      },
      {
        text: "常用工具",
        items: [
          { text: "npm", link: "/utils/npm" },
          { text: "git", link: "/utils/git" },
          { text: "pnpm", link: "/utils/pnpm" },
          { text: "vscode", link: "/utils/vscode" },
          { text: "charles", link: "/utils/charles" },
          { text: "nginx", link: "/utils/nginx" },
        ],
        collapsed: true,
      },
      {
        text: "操作系统",
        items: [
          { text: "mac", link: "/os/mac" },
          { text: "linux", link: "/os/linux" },
        ],
        collapsed: true,
      },
      {
        text: "实践中遇到的问题",
        items: [
          { text: "gulp", link: "/issues/gulp" },
          { text: "https", link: "/issues/https" },
          { text: "shelljs", link: "/issues/shelljs" },
          { text: "npm", link: "/issues/npm" },
          { text: "nuxt3", link: "/issues/nuxt3" },
          { text: "字体库", link: "/issues/font" },
          { text: "uni-app", link: "/issues/uni-app" },
          { text: "vue3", link: "/issues/vue3" },
          { text: "pinia", link: "/issues/pinia" },
          { text: "github", link: "/issues/github" },
          { text: "vue组件库", link: "/issues/vue-component" },
          { text: "跨域", link: "/issues/cors" },
          { text: "electron", link: "/issues/electron" },
        ],
        collapsed: true,
      },
      {
        text: "代码格式化",
        items: [
          { text: "Husky + commitment + lint-staged", link: "/format/1" },
          { text: "开发npm插件时，使用ts编写代码所需配置", link: "/format/2" },
          { text: "Eslint + ts + prettier + vue3", link: "/format/3" },
        ],
        collapsed: true,
      },
      {
        text: "算法",
        items: [
          { text: "冒泡排序", link: "/algorithms/bubbleSort" },
          { text: "插入排序", link: "/algorithms/insertSort" },
          { text: "二分查找法", link: "/algorithms/binarySearch" },
        ],
        collapsed: true,
      },
      {
        text: "其他",
        items: [
          { text: "uni-app 自动化云打包开发思路", link: "/others/uni-app" },
          { text: "vue组件库开发", link: "/others/component-library" },
          { text: "一些好用的nodejs库", link: "/others/node-library" },
          { text: "一些不错的网站与博客", link: "/others/sites&blogs" },
          { text: "关于package.json", link: "/others/package_json" },
        ],
        collapsed: true,
      },
      {
        text: "electron",
        items: [{ text: "Mac平台签名公证流程", link: "/electron/sign" }],
        collapsed: true,
      },
    ],
  },
  // markdown: {
  //   config(md) {
  //     md.use(containerPreview)
  //     md.use(componentPreview)
  //   }
  // }
};

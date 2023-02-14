# nuxt3

## 使用官方脚手架新建ts项目，打包ts文件会报错

使用官方的  

```bash
pnpm dlx nuxi init [<project-name>]
```

命令新建项目后，如果在pages目录下的vue文件的script使用了**lang="ts"**，  
那么执行**pnpm build**或者**pnpm generate**命令打包时会报错，  
提示找不到xxx.vue?macro=true&vue&type=script&setup=true&lang.ts文件  

issues: https://github.com/nuxt/framework/issues/8041

解决办法：  
把项目复制到一个新的目录，重新安装依赖

## 开发环境下tailwind.css和element-plus的el-button样式冲突

当同时引入tailwind.css和element-plus样式时，el-button样式会被tailwind.css的默认样式覆盖  

解决办法有两种：  
1.在nuxt.config.ts里判断环境为开发环境时，动态添加tailwind.css的cdn资源  

```ts
// nuxt.config.ts
const isDev = process.env.npm_lifecycle_event === 'dev'
export default defineNuxtConfig({
meta: {
  script: [
    isDev && {
      src: 'https://cdn.tailwindcss.com',
    },
  ],
},
})
```

2.或者在引入全局样式的scss文件里覆盖原有element样式 (**推荐**)

```scss
// common.scss
:deep(.el-pagination.is-background .el-pager) {
  li {
    background-color: white;
    color: $dark-blue;
  }
  li.is-active {
    background-color: var(--el-color-primary);
    color: var(--el-color-white);
  }
}
```

## 添加第三方组件，来回切换页面后组件无法加载出来

解决办法：延迟加载

```vue
<template>
  <Particles v-if="isShow" class="w-full h-full" :particlesInit="particlesInit" :options="particlesOptions" />
</template>

<script lang="ts" setup>
const isShow = ref(false)
onMounted(() => {
  setTimeout(async () => {
    // 延迟加载高德地图插件
    const AMap = await initMap()
    // 延迟加载vue3-particles组件
    isShow.value = true
  }, 300)
}
</script>
```

## 使用内置的useFetch方法，如果参数相同则不会进行第二次请求

解决办法：设置key属性

```ts
import { hash } from 'ohash'

useFetch<IResponse<T>>(url, {
  ...params,
  // 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
  key: hash(JSON.stringify(params) + '_' + url),
  baseURL: config.public.apiBaseUrl,
})
```

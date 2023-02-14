# vue3

## 开发动态路由的坑

### 使用vite3时无法通过使用require.context方法获取路由文件夹内容，可以使用import.meta.glob('./modules/*.ts', { eager: true }) 方法代替  

例子：

```ts
const files: Record<string, { default: any[] }> = import.meta.glob('./modules/*.ts', { eager: true })

const modules = []

for (const path in files) {
  modules.push(files[path].default[0])
}
```

### 添加{ path: '/:pathMatch(.*)', redirect: '/404', hidden: true }路由时，要放在动态路由栈里，如果放在静态路由栈，由于动态路由栈中的路由还没插入到routes里面，会导致刷新页面时跳转到404页面  

例子：

```ts
const whileList = ['/404', '/', '/login', '/customFormDemoRoot', '/notice']

modules.push({ path: '/:pathMatch(.*)', redirect: '/404', hidden: true })

const constRoutes = [] as NewRouteRecordRaw[]
export const asyncRoutes = [] as NewRouteRecordRaw[]

modules.forEach((route) => {
  constRoutes.push(route)
  if (whileList.includes(route.path) || route.path === undefined) {
    constRoutes.push(route)
  } else {
    // 放在动态路由栈里
    asyncRoutes.push(route)
  }
})
```

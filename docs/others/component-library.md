# vue 组件库开发

## 思路

1.使用 yarn + lerna 搭建项目

2.使用 ts-morph 分别在 lib 目录和 es 目录下生成 d.ts 文件

3.使用 glob 获取所有组件的 ts 文件和 vue 文件，使用 vueCompiler  
基于 script 或 script setup 解析出文件内容并保存到数组中，遍历数组，根据文件内容修改 d.ts 目录结构

4.使用 glob.sync 方法提取出以组件名为 key、以组件文件的绝对地址为 value 的对象，利用对象作为 rollup 的 input 入口参数，过滤出 dependencies 和 peerDependencies 的依赖插件，把依赖插件和组件打包到 lib 和 es 目录下

5.使用 gulp 打包 scss 文件到 theme-chalk 目录

6.使用 vuepress 编写和打包文档

7.使用 npm publish 命令上传代码

## 注意事项

如果在组件库中导入了 element-plus（或者其他依赖），那么请不要在 package.json 的 dependencies 中声明该依赖，因为当本地项目执行 npm install 时，element-plus 会被安装到组件库的 node_modules 中，而不是你项目的 node_modules 中，如果你本地项目也使用了 element-plus，那么 elment-plus 会有两份，分别出现在你项目的 node_modules 和组件库的 node_modules 中，如果项目和组件库的 element-plus 版本不一致，就可能会导致版本冲突。

正确做法是应该在组件库的 peerDependencies 中声明 element-plus，peerDependencies 的作用是告知使用组件库时还需要安装哪些依赖。如果在开发组件库的运行时需要用到 element-plus，可以声明在 devDependencies 中，devDependencies 的作用是开发时需要安装的依赖，不会影响到项目中使用组件库时的依赖。

```json
"devDependencies": {
  "element-plus": "^2.4.2"
},
"peerDependencies": {
  "element-plus": "^2.4.2"
}
```

这样在项目中安装组件库时，如果已经安装了 element-plus，那么组件库会使用项目中的 element-plus，也就不会出现版本冲突问题了，而且还能根据项目中的 element-plus 版本来决定组件库的 element-plus 版本。

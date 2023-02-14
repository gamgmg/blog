# vue组件库

## 当使用rollup-plugin-typescript2进行编译打包时提示TS2307: Cannot find module vue  or its corresponding type declarations

原因是开发组件库时没有安装vue依赖  

解决办法：
在rollup-plugin-typescript2配置项添加**abortOnError: false**

```js
// build.js

const inputOptions = {
  input: inputFiles,
  plugins: [
    commonjs(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        }
      },
      abortOnError: false,
    }),
    vue(),
  ]
}
```

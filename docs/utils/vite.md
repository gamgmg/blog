# vite

## 动态导入模块

import.meta.glob 方法可以动态导入模块

例子

```js
const modules = import.meta.glob("./components/*.vue");

for (const path in modules) {
  modules[path]().then((module) => {
    console.log(module);
  });
}
```

上面代码会动态匹配 components 文件夹下的所有.vue 文件，并将它们导入

作用跟 import from 语法一样，但它能批量导入多个模块

需要注意，import.meta.glob 只能在开发环境使用，也就是只能在编译时使用，运行时无法使用

在运行时需要使用 import()方法来动态导入模块

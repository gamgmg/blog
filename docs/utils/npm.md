# npm 基本使用

## 登录

```bash
npm login
```

## 查看登录信息

```bash
npm who am i
```

## 发布包

```bash
npm publish
```

:exclamation: 发布包到 npm 时，需设置成[npm 源](#源)， 不然会报 403 错误，提示找不到该用户

## 删除已发布包

```bash
npm unpublish [<pkg>][@<version>] --force
```

## 把本地项目软链接到全局

在项目目录执行

```bash
npm link
```

或者

```bash
npm install  [<pkg>][@<version>] -g
```

## 删除全局软链接

```bash
npm unlink  [<pkg>][@<version>] -g
```

或者

```bash
npm uninstall  [<pkg>][@<version>] -g
```

:exclamation: 由于 npm 会把当前项目的 package.json 的 name 作为项目名称软链接到当前 node 版本的 node_modules 文件夹下，所以删除时要使用本地项目 package.json 的 name，而不是项目目录名

## 源 {#源}

npm

```bash
https://registry.npmjs.org/
```

淘宝

```bash
https://registry.npmmirror.com
```

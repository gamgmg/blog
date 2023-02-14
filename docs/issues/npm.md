# npm

## 登录npm出现403报错问题

```bash
npm ERR! code E403
npm ERR! 403 403 Forbidden - PUT https://registry.npmmirror.com/-/user/org.couchdb.user:gurming! - [FORBIDDEN] Public registration is not allowed
npm ERR! 403 In most cases, you or one of your dependencies are requesting
npm ERR! 403 a package version that is forbidden by your security policy, or
npm ERR! 403 on a server you do not have access to
```

原因是因为npm设置了淘宝的源，所以npm找不到用户  
解决办法：  
把源重新设置成`https://registry.npmjs.org/`

```bash
npm config set registry https://registry.npmjs.org/
```

## 发布npm包出现402错误

```bash
npm ERR! code E402
npm ERR! 402 Payment Required - PUT https://registry.npmjs.org/.... - You must sign up for private packages
```

原因是包名前面以@开头，凡是以@开头的包名npm都会认为是私有包，需要付费注册私有包才能发布  
解决办法：  

发布时添加**access=public**参数

```bash
npm publish --access=public
```

或者在**package.json**里面添加以下代码

```json
{
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}
```

## npm link后 执行bin命令报syntax error near unexpected token `(' 错误

原因是执行node脚本时，npm不知道你执行的代码是node脚本，所以需要在文件第一行添加解析器，让npm知道是node脚本  

解决办法：  
在入口文件（一般是index.js或index.ts）的顶部加上 #!/usr/bin/env node

```js
#!/usr/bin/env node

// code...
// code...
```

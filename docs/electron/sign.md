# Mac 平台签名公证流程

## 1.准备好证书

需要两个 p12 证书，application.p12 和 installer.p12

安装到钥匙串里面的登录选项下

## 2.准备一个 appleID

加入到企业的 apple developer team 里面，创建一个专用密码（用个人密码容易造成泄密）

使用 app 专用密码通过 apple ID 登录 app

## 3.配置参数

打开 electron-forge 官网看[文档](https://www.electronjs.org/docs/latest/tutorial/code-signing#electron-forge)

在项目的 forge.config.js 文件里面像如下的格式配置参数

```js
module.exports = {
  packagerConfig: {
    icon: "./src/assets/images/app_icon/icon",
    osxSign: {
      identity: "你的identity",
      "hardened-runtime": true,
      entitlements: "entitlements.plist",
      "entitlements-inherit": "entitlements.plist",
      "signature-flags": "library",
    },
    osxNotarize: {
      appleId: "你的appleID",
      appleIdPassword: "你的密码",
    },
  },
};
```

创建 `entitlements.plist` 存放在项目的根目录下面

identity 选项填写`钥匙串安装的证书名字`

osxNotarize 填写自己的 appleId 跟申请的专用密码（不要使用自己的密码，容易造成泄密）

## 4.打包

做完前面的步骤，执行 npm run make，如果没有权限操作某些目录的话，使用 sudo npm run make
可能会有报错信息如下

```bash
Packaging ApplicationWARNING: Code sign failed; please retry manually. Error: Command failed: codesign --sign xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx --force --timestamp --options library,runtime --entitlements entitlements.plist /var/folders/5d/xxxxxxxxxxxxxxxxxxxxxxxxxxxx/T/electron-packager/darwin-x64/xxx-darwin-x64/xxx.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Resources/af.lproj/locale.pak /var/folders/5d/xxxxxxxxxxxxxxxxxxxxxxxxxxxx/T/electron-packager/darwin-x64/xxx-darwin-x64/xxx.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Resources/af.lproj/locale.pak: timestamps differ by 374 seconds - check your system clock
```

可能是系统的时间存在偏差，需要重新校准，打开控制台，执行命令

```bash
sudo sntp -sS time.apple.com
```

继续执行 npm run make
可能会报错，如下

```bash
Packaging ApplicationWARNING: Code sign failed; please retry manually. Error: Command failed: spctl --assess --type execute --verbose --ignore-cache --no-cache /tmp/electron-packager/darwin-x64/xxx-darwin-x64/xxx.app
/tmp/electron-packager/darwin-x64/xxx-darwin-x64/xxx.app: rejected
source=Unnotarized Developer ID
```

打开控制台，执行如下命令

```bash
sudo spctl --master-disable
```

接下来，继续执行 npm run make
控制台没有任何报错，顺利执行完毕

## 5.判断是否签名成功

打开 out 导出的 zip，解压 zip 得到 xxx.app。终端使用如下命令执行

```bash
codesign -dvvv xxx.app
```

## 6.判断公正是否成功

在终端执行以下命令

```bash
spctl -a -v test.app
```

返回：accept 表示公证成功

## 7.公正成功

如果公正成功的话，该 appleID 绑定的邮箱会收到一份 apple developer 发的邮件

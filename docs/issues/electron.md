# Electron

## Windows 消息通知无法与应用关联起来

场景：当使用 node-notifier 调用`notify`方法时，通知无法与应用关联起来，点击通知无法打开应用。

解决办法：需要在启动应用时，调用`app.setAppUserModelId`方法，设置应用的`AppUserModelId`。同时，把应用的`AppUserModelId`赋值给 node-notifier 的 `notify`方法的 `appID`参数。

1.在全局配载文件中定义 appUserModelId

```ts
export default const generalConfig = {
  appUserModelId: "com.xxx.xxx",
}
```

2.启动应用时，设置 AppUserModelId

```ts
import { app } from "electron";
import generalConfig from "./generalConfig";

app.on("ready", () => {
  if (process.platform !== "darwin") {
    setAppUserModelId();
  }
});

const setAppUserModelId = () => {
  app.setAppUserModelId(generalConfig.appUserModelId);
  const toastActivatorClsid = "eb1fdd5b-8f70-4b5a-b230-998a2dc19303"; // 这个为通知图标的clsid，固定值，不用改
  const appLocation = process.execPath;
  const appData = app.getPath("appData");
  const shortcutPath = path.join(
    appData,
    "Microsoft",
    "Windows",
    "Start Menu",
    "Programs",
    "xxx.lnk" // 自己应用的快捷键link，快捷方式图标->右键->属性->详细信息查看link名称
  );

  try {
    const shortcutDetails = shell.readShortcutLink(shortcutPath); // throws error if it doesn't exist yet
    // validate shortcutDetails
    if (
      shortcutDetails.target !== appLocation ||
      shortcutDetails.appUserModelId !== generalConfig.appUserModelId ||
      shortcutDetails.toastActivatorClsid !== toastActivatorClsid
    ) {
      throw "needUpdate";
    }
    // if the execution got to this line, the shortcut exists and is valid
  } catch (error) {
    // if not valid -> Register shortcut
    shell.writeShortcutLink(
      shortcutPath,
      error === "needUpdate" ? "update" : "create",
      {
        target: appLocation,
        cwd: path.dirname(appLocation),
        description: "",
        appUserModelId: generalConfig.appUserModelId,
        toastActivatorClsid,
      }
    );
  }
};
```

3.调用 node-notifier 的 notify 方法时，设置 appID

```ts
import generalConfig from "./generalConfig";

notifier.notify({
  title: "title",
  message: "message",
  icon: "icon",
  wait: true,
  appID: generalConfig.appUserModelId,
});
```

## 项目打包后，托盘图标无法显示

场景：在项目打包后，托盘图标无法显示。原因是打包后资源路径无法使用。

解决办法：通过 `app.isPackaged` 变量判断是否已打包，将资源路径替换为打包后的资源路径。

1.在 forge.config.ts 中配置一下，指定图标资源文件打包后需要拷贝到 resources 目录下

```ts
const config: ForgeConfig = {
  packagerConfig: {
    // ...
    extraResource: [
      // ...
      "./src/assets/images/tray/icon.png", // 指定的图标资源路径
    ],
  },
};
module.exports = config;
```

2.创建托盘时根据是否已打包设置图标资源路径

```ts
import { app, Tray, nativeImage } from "electron";
import path from "path";

function getIconPath(fileName: string) {
  return app.isPackaged
    ? path.join(path.dirname(app.getPath("exe")), `/resources/${fileName}`) // 打包后的路径
    : `src/assets/images/tray/${fileName}`; // 开发环境的路径
}
// 获取图标路径
const trayIconPath = getIconPath("icon.png");
// 创建托盘图标
const trayIcon = nativeImage.createFromPath(trayIconPath);
// 创建托盘
const tray = new Tray(trayIcon);
```

## preload.js 中无法获取最新的 window 对象

场景：假如第三方网页在 window 对象上挂载了某些全局属性，而我们又需要获取这些属性时，则无法简单的通过访问 window 对象来获取到这些属性。

解决办法：通过在主进程调用`BrowerView`的`webContents.executeJavaScript`方法获取，然后通过 `ipc` 返回给 preload。

1.在主进程中 dispatch 一个方法，获取 window 对象

```ts
import { ipcMain } from "electron";

const browerView = new BrowserView({
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
    webSecurity: false,
  },
});
browerView.webContents.loadURL("www.xxx.com"); // 访问第三方网页

function getWindow() {
  return new Promise(async (resolve) => {
    const win = await browerView.webContents.executeJavaScript(`window`); // 获取window对象
    resolve(win);
  });
}

ipcMain.handle("get_window", async (event) => {
  const win = await getWindow();
  return win;
});
```

2.在 preload 中通过 ipc 调用主进程的方法拿到数据

```ts
import { ipcRenderer } from "electron";

async function getWindow() {
  return await ipcRenderer.invoke("get_window");
}
```

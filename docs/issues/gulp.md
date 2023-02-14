# gulp

## 当根目录下没有gulpfile.js文件时，执行gulp命令会报No gulpfile found错误

解决办法：  
执行gulp命令时指定gulpfile文件

```bash
gulp -f somefile.js
```

## watch 监听事件只执行了一次的问题

例子：

```js
const { watch } = require('gulp')
const shell = require('shelljs')

function build(){
  shell.exec('pnpm build')
}

watch('src/**/*.ts', build)
```

当在终端执行gulp指令后，watch只监听了一次文件变化，后面就不再监听了

原因：  
没有执行回调函数告诉gulp任务执行完成，所以任务会一直处于未完成状态  

解决方法：
在执行的任务里调用一下回调函数

```js
function build(cb){
  shell.exec('pnpm build')
  cb()
}
```

# shelljs

## 使用esbuild打包shelljs后运行打包产物报Uncaught Error: Cannot find module './src/cat'错误

解决办法：  
在配置esbuild时把**bundle: true**去掉，或者改为**bundle: false**  

```js
import esbuild from 'esbuild'

esbuild.build({
  entryPoints: ['src/index.ts'],
  outfile: 'outfile.cjs',
  bundle: false,
  format: 'cjs',
  platform: 'node',
  target: 'node14'
})
```

# vue组件库开发思路

1.使用yarn + lerna搭建项目  

2.使用ts-morph分别在lib目录和es目录下生成d.ts文件  

3.使用glob获取所有组件的ts文件和vue文件，使用vueCompiler  
基于script 或script setup解析出文件内容并保存到数组中，遍历数组，根据文件内容修改d.ts目录结构  

4.使用glob.sync方法提取出以组件名为key、以组件文件的绝对地址为value的对象，利用对象作为rollup的input入口参数，过滤出dependencies和peerDependencies的依赖插件，把依赖插件和组件打包到lib和es目录下  

5.使用gulp打包scss文件到theme-chalk目录  

6.使用vuepress编写和打包文档  

7.使用npm publish 命令上传代码

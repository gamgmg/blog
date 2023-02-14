# uni-app

## app端的坑(基于vue2)

1. 不支持使用webpack的require context 动态引入组件，原因是Vue.component方法的第一个参数只支持静态字符串，解决方案是使用easycom的组件模式
2. 组件不支持()=> import()懒加载的方式引入
3. vue文件下拉刷新的动画效果只能出现在原生导航栏下方，没有原生导航栏则出现在页面顶部，而且下拉刷新的动画类型只有default、circle两种选择，解决方案是使用nvue，nvue支持自定义下拉刷新的动画效果和位置
4. 原生下拉刷新和scroll-view组件有冲突，如非必要，两者不要一起使用。另外，scroll-view做长列表有性能问题
5. vscode不支持nvue文件，使用eslint+prittier会出现报错，解决方案是放弃vscode，改用HbuilderX
6. 静态资源(图片)只能放在static文件夹下
7. 动态slot的name值，动态部分只能是数字，数字以外的都会失效
8. 当使用融云的emoji插件时，emoji的node属性里面的字符串span标签，如果用v-html进行转换，转换出来的span标签会没有高跟宽，需要把span标签转成block或者inline-block类型
9. 不支持dom操作，只能通过uni-app的createSelectorQuery方法获取dom的信息
10. 当对template标签做v-for循环时，使用动态插槽名会失效
11. 如果组件通过npm引入，那么组件里面的本地图片、icon图标会失效，可以换成cdn链接解决
12. transition组件失效，解决方案是改用动态给class添加动画或过渡效果样式
13. 不支持通过全局api调用打开弹窗组件，因为app没有document，所以无法通过Vue.extend方法把组件动态挂载在到body上

## 小程序端的坑(基于vue2)

1. 不支持动态组件，动态slot
2. transition组件失效，解决方案是改用动态给class添加动画或过渡效果样式
3. 不支持通过全局api调用打开弹窗组件，因为小程序没有document，所以无法通过Vue.extend方法把组件动态挂载在到body上
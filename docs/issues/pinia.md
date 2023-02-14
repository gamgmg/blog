# pinia

## 当在router.beforeEach中用到state时，需要在beforeEach中声明useStore才有效，因为beforeEach前声明useStore时，pinia还没安装

例子：

```ts
import useUserStore from '@/store/modules/user'

// const userStore = useUserStore() 在此处获取userStore没有效果

router.beforeEach(async (to, from, next) => {
  // 路由已安装，pinia 也将安装
  const userStore = useUserStore()

  if (userStore.isLogin) {
    if (to.path == LOGIN_PATH) {
      return next(ROOT_PATH)
    }
  }
}
```

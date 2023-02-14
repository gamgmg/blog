# pnpm

## 创建monorepo项目

在根目录新建pnpm-workspace.yaml文件，然后再添加各个workspace目录

pnpm-workspace.yaml格式如下

```yaml
package:
    - packages/*
    - docs
    - play
```

然后在packages、docs、play目录下创建package.json，设置name  

默认调用pnpm add \[\<pkg\>\]会对所有workspace生效  

可以使用 pnpm —filter 参数指定需要add 的workspace  

例如：

```bash
pnpm -F @demo/utils add lodash
```

如果想workspace之间互相引用，可以这样写

```bash
pnpm -F @demo/packages add @demo/utils
```

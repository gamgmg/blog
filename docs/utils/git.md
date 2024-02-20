# git

<!-- ## commit

### Commitizen

Commitizen是一个撰写合格 Commit message 的工具

安装命令如下

```bash
npm install -g commitizen
```

然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式

```bash
commitizen init cz-conventional-changelog --save --save-exact
```

以后，凡是用到git commit命令，一律改为使用git cz -->

## tag

发送本地标签

```bash
git tag [<tagname>]
```

发送标签到远程

```bash
git push origin [<tagname>]
```

删除一个本地标签

```bash
git tag -d [<tagname>]
```

删除一个远程标签

```bash
git push -d origin [<tagname>]
```

## 其他常用命令

强制提交本地代码到远程并覆盖提交记录，一般用于撤销远程的提交

```bash
git push -f
```

清除本地删除的引用

```bash
git push —prune
```

拉取并清除远端已删除的分支

```bash
git pull -p
```

删除本地分支

```bash
git branch -d [<分支名>]
```

删除远端分支

```bash
git push origin —delete [<分支名>]
```

删除旧的、有冲突的分支

```bash
git remote prune origin
```

关联并推送到远程分支

```bash
git push -u origin [<分支名>]
```

## 修改项目 git 源

1.先把所有修改过的代码进行 commit

```bash
git commit -m "change."
```

2.删掉原来 git 源

```bash
git remote remove origin
```

3.将新源地址写入本地版本库配置文件

```bash
git remote add origin http://xxxxxxxxxx.git
```

4.提交所有代码

```bash
git push -u origin master
```

## 查看和修改 git 账号和邮箱（密码）

去掉 --global 可查看和修改当前仓库的账号和邮箱

查看

```bash
git config --global user.name
git config --global user.email
```

修改

```bash
git config --global user.name "your name"
git config --global user.email "your email"
```

# mac

## 修改hosts

```bash
sudo vim /private/etc/hosts
```

配置hosts可以加快域名解析速度，不需要把网址提交DNS域名解析服务器进行IP地址的解析  

格式：ip地址 (中间空格隔开) 域名  

例如：

```bash
127.0.0.1       localhost
140.82.112.4    github.com  
```

可以通过访问[ipaddress](https://www.ipaddress.com)查找域名对应的ip是多少

## 修改环境变量

打开.bash_profile修改

```bash
vim ~/.bash_profile
```

修改后执行下面命令使配置生效

```bash
source ~/.bash_profile
```

## 快捷键

全屏/取消全屏：control + command + f  

删除文件/文件夹：command + delete  

## 新建文件

打开终端 输入

```bash
touch [<name>]
```

## 快速进入文件夹

打开Finder使用快捷键command+shift+g输入路径即可进入该文件夹

## Vim 编辑文件

输入i命令编辑文件  

按esc回到普通模式  

输入:w保存  

输入:q退出  

输入:wq保存并退出  

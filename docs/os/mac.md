# mac

## 修改 hosts

```bash
sudo vim /private/etc/hosts
```

配置 hosts 可以加快域名解析速度，不需要把网址提交 DNS 域名解析服务器进行 IP 地址的解析

格式：ip 地址 (中间空格隔开) 域名

例如：

```bash
127.0.0.1       localhost
140.82.112.4    github.com
```

可以通过访问[ipaddress](https://www.ipaddress.com)查找域名对应的 ip 是多少

## 修改环境变量

打开.bash_profile 修改

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

打开当前聚焦的文件夹下的终端 control + option + t

## 新建文件

打开终端 输入

```bash
touch [<name>]
```

## 快速进入文件夹

打开 Finder 使用快捷键 command+shift+g 输入路径即可进入该文件夹

## Vim 编辑文件

输入 i 命令编辑文件

按 esc 回到普通模式

输入:w 保存

输入:q 退出

输入:wq 保存并退出

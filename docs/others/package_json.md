# 关于 package.json

## 在 package.json 中，可以使用多种方式来指定一个依赖的版本，以下是一些常见的方式

1.版本号：例如 "admin-modules": "1.2.3"。这会安装指定版本的 admin-modules。

2.版本范围：例如 "admin-modules": "^1.2.3"。这会安装 1.2.3 或更高版本的 admin-modules，但不会安装 2.0.0 或更高版本。^ 符号表示可以接受任何次要版本或补丁版本的更新，但不接受主要版本的更新。你也可以使用 ~ 符号来只接受补丁版本的更新，例如 "admin-modules": "~1.2.3"。

3.最新版本：例如 "admin-modules": "latest"。这会安装最新版本的 admin-modules。

4.Git URL：例如 "admin-modules": "git+ssh://git@gitlab.example.cn:web-front-end/admin-modules.git#v0.1.13"。这会从指定的 Git 仓库中获取 admin-modules。你可以在 URL 后面加上 # 和一个标签、分支或提交的哈希值来指定版本。

5.GitHub 仓库：例如 "admin-modules": "username/repo#v0.1.13"。这会从指定的 GitHub 仓库中获取 admin-modules。你可以在仓库名后面加上 # 和一个标签、分支或提交的哈希值来指定版本。

6.文件路径：例如 "admin-modules": "file:../admin-modules"。这会从本地文件系统中的指定路径获取 admin-modules。

7.tarball URL：例如 "admin-modules": "https://example.com/admin-modules-1.2.3.tgz"。这会从指定的 URL 下载一个 tarball，并从中安装 admin-modules。

8.tarball 文件：例如 "admin-modules": "file:../admin-modules-1.2.3.tgz"。这会从本地文件系统中的指定路径获取一个 tarball，并从中安装 admin-modules

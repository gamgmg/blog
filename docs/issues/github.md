# github

## 部署GitHub pages时提示403错误

![deploy错误](/assets/img/p3.png "deploy错误")

原因是当workflows执行git push origin gh-pages时，由于没有读写权限，导致报403错误

解决办法：
给workflows的permission设置读写权限  

打开项目仓库的settings页面，再打开Actions菜单下的General页面，给Workflow permissions设置读写权限，点击save

如下图：
![Workflow permissions](/assets/img/p4.png "Workflow permissions")

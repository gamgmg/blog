# 字体库

## 添加字体库后英文出现连字情况

![连字](/assets/img/p.png "连字")
上面图片profile单词的**h**字母会和**i**字母连在一起

解决办法：  
给元素样式设置font-variant-ligatures为none

```scss
.subtitle {
  font-variant-ligatures: none;
}
```

效果：
![非连字](/assets/img/p2.png "非连字")

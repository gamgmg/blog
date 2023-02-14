import{_ as a,c as s,o as e,a as n}from"./app.7ac44ccb.js";const u=JSON.parse('{"title":"mac","description":"","frontmatter":{},"headers":[{"level":2,"title":"修改hosts","slug":"修改hosts","link":"#修改hosts","children":[]},{"level":2,"title":"修改环境变量","slug":"修改环境变量","link":"#修改环境变量","children":[]},{"level":2,"title":"快捷键","slug":"快捷键","link":"#快捷键","children":[]},{"level":2,"title":"新建文件","slug":"新建文件","link":"#新建文件","children":[]},{"level":2,"title":"快速进入文件夹","slug":"快速进入文件夹","link":"#快速进入文件夹","children":[]},{"level":2,"title":"Vim 编辑文件","slug":"vim-编辑文件","link":"#vim-编辑文件","children":[]}],"relativePath":"os/mac.md"}'),l={name:"os/mac.md"},t=n(`<h1 id="mac" tabindex="-1">mac <a class="header-anchor" href="#mac" aria-hidden="true">#</a></h1><h2 id="修改hosts" tabindex="-1">修改hosts <a class="header-anchor" href="#修改hosts" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/private/etc/hosts</span></span>
<span class="line"></span></code></pre></div><p>配置hosts可以加快域名解析速度，不需要把网址提交DNS域名解析服务器进行IP地址的解析</p><p>格式：ip地址 (中间空格隔开) 域名</p><p>例如：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1       localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">140.82.112.4    github.com  </span></span>
<span class="line"></span></code></pre></div><p>可以通过访问<a href="https://www.ipaddress.com" target="_blank" rel="noreferrer">ipaddress</a>查找域名对应的ip是多少</p><h2 id="修改环境变量" tabindex="-1">修改环境变量 <a class="header-anchor" href="#修改环境变量" aria-hidden="true">#</a></h2><p>打开.bash_profile修改</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.bash_profile</span></span>
<span class="line"></span></code></pre></div><p>修改后执行下面命令使配置生效</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.bash_profile</span></span>
<span class="line"></span></code></pre></div><h2 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-hidden="true">#</a></h2><p>全屏/取消全屏：control + command + f</p><p>删除文件/文件夹：command + delete</p><h2 id="新建文件" tabindex="-1">新建文件 <a class="header-anchor" href="#新建文件" aria-hidden="true">#</a></h2><p>打开终端 输入</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[&lt;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">&gt;]</span></span>
<span class="line"></span></code></pre></div><h2 id="快速进入文件夹" tabindex="-1">快速进入文件夹 <a class="header-anchor" href="#快速进入文件夹" aria-hidden="true">#</a></h2><p>打开Finder使用快捷键command+shift+g输入路径即可进入该文件夹</p><h2 id="vim-编辑文件" tabindex="-1">Vim 编辑文件 <a class="header-anchor" href="#vim-编辑文件" aria-hidden="true">#</a></h2><p>输入i命令编辑文件</p><p>按esc回到普通模式</p><p>输入:w保存</p><p>输入:q退出</p><p>输入:wq保存并退出</p>`,27),p=[t];function i(o,c,r,h,d,m){return e(),s("div",null,p)}const C=a(l,[["render",i]]);export{u as __pageData,C as default};

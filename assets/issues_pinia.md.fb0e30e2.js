import{_ as s,c as a,o as e,a as n}from"./app.4f7d1f0f.js";const C=JSON.parse('{"title":"pinia","description":"","frontmatter":{},"headers":[{"level":2,"title":"当在router.beforeEach中用到state时，需要在beforeEach中声明useStore才有效，因为beforeEach前声明useStore时，pinia还没安装","slug":"当在router-beforeeach中用到state时-需要在beforeeach中声明usestore才有效-因为beforeeach前声明usestore时-pinia还没安装","link":"#当在router-beforeeach中用到state时-需要在beforeeach中声明usestore才有效-因为beforeeach前声明usestore时-pinia还没安装","children":[]}],"relativePath":"issues/pinia.md"}'),o={name:"issues/pinia.md"},l=n(`<h1 id="pinia" tabindex="-1">pinia <a class="header-anchor" href="#pinia" aria-hidden="true">#</a></h1><h2 id="当在router-beforeeach中用到state时-需要在beforeeach中声明usestore才有效-因为beforeeach前声明usestore时-pinia还没安装" tabindex="-1">当在router.beforeEach中用到state时，需要在beforeEach中声明useStore才有效，因为beforeEach前声明useStore时，pinia还没安装 <a class="header-anchor" href="#当在router-beforeeach中用到state时-需要在beforeeach中声明usestore才有效-因为beforeeach前声明usestore时-pinia还没安装" aria-hidden="true">#</a></h2><p>例子：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useUserStore </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/store/modules/user</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const userStore = useUserStore() 在此处获取userStore没有效果</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beforeEach</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">to</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">from</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 路由已安装，pinia 也将安装</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">userStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useUserStore</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">userStore</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isLogin</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">LOGIN_PATH</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ROOT_PATH</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,4),p=[l];function t(r,c,i,y,F,D){return e(),a("div",null,p)}const f=s(o,[["render",t]]);export{C as __pageData,f as default};
import{_ as s,c as a,o as n,a as o}from"./app.f6e6bc24.js";const d=JSON.parse('{"title":"vite","description":"","frontmatter":{},"headers":[{"level":2,"title":"动态导入模块","slug":"动态导入模块","link":"#动态导入模块","children":[]}],"relativePath":"utils/vite.md"}'),l={name:"utils/vite.md"},p=o(`<h1 id="vite" tabindex="-1">vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h1><h2 id="动态导入模块" tabindex="-1">动态导入模块 <a class="header-anchor" href="#动态导入模块" aria-hidden="true">#</a></h2><p>i<wbr>mport.meta.glob 方法可以动态导入模块</p><p>例子</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> modules </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">glob</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./components/*.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> modules) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">modules</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">]()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">module</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">module</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>上面代码会动态匹配 components 文件夹下的所有.vue 文件，并将它们导入</p><p>作用跟 import from 语法一样，但它能批量导入多个模块</p><p>需要注意，i<wbr>mport.meta.glob 只能在开发环境使用，也就是只能在编译时使用，运行时无法使用</p><p>在运行时需要使用 import()方法来动态导入模块</p>`,9),e=[p];function t(c,r,i,F,y,D){return n(),a("div",null,e)}const C=s(l,[["render",t]]);export{d as __pageData,C as default};

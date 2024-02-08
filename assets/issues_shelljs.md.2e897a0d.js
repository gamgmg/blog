import{_ as s,c as n,o as a,a as l}from"./app.adeccbf4.js";const C=JSON.parse(`{"title":"shelljs","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用esbuild打包shelljs后运行打包产物报Uncaught Error: Cannot find module './src/cat'错误","slug":"使用esbuild打包shelljs后运行打包产物报uncaught-error-cannot-find-module-src-cat-错误","link":"#使用esbuild打包shelljs后运行打包产物报uncaught-error-cannot-find-module-src-cat-错误","children":[]}],"relativePath":"issues/shelljs.md"}`),o={name:"issues/shelljs.md"},e=l(`<h1 id="shelljs" tabindex="-1">shelljs <a class="header-anchor" href="#shelljs" aria-hidden="true">#</a></h1><h2 id="使用esbuild打包shelljs后运行打包产物报uncaught-error-cannot-find-module-src-cat-错误" tabindex="-1">使用esbuild打包shelljs后运行打包产物报Uncaught Error: Cannot find module &#39;./src/cat&#39;错误 <a class="header-anchor" href="#使用esbuild打包shelljs后运行打包产物报uncaught-error-cannot-find-module-src-cat-错误" aria-hidden="true">#</a></h2><p>解决办法：<br> 在配置esbuild时把<strong>bundle: true</strong>去掉，或者改为<strong>bundle: false</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> esbuild </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">esbuild</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">esbuild</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">build</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">entryPoints</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src/index.ts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">outfile</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">outfile.cjs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bundle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">format</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cjs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">platform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">node</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">node14</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,4),p=[e];function t(r,c,D,i,F,y){return a(),n("div",null,p)}const u=s(o,[["render",t]]);export{C as __pageData,u as default};
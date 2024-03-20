import{_ as s,c as n,o as a,a as l}from"./app.dbb8bcb8.js";const A=JSON.parse('{"title":"等差数列求和","description":"","frontmatter":{},"headers":[{"level":2,"title":"通项公式","slug":"通项公式","link":"#通项公式","children":[]}],"relativePath":"algorithms/arithmetic.md"}'),p={name:"algorithms/arithmetic.md"},o=l(`<h1 id="等差数列求和" tabindex="-1">等差数列求和 <a class="header-anchor" href="#等差数列求和" aria-hidden="true">#</a></h1><p>等差数列是常见数列的一种，可以用 AP 表示，如果一个数列从第二项起，每一项与它的前一项的差等于同一个常数，这个数列就叫做等差数列，而这个常数叫做等差数列的公差，公差常用字母 d 表示。例如：1,3,5,7,9……（2n-1)。等差数列{an}的通项公式为：an=a1+(n-1)d。前 n 项和公式为：Sn=n*a1+n(n-1)d/2 或 Sn=n(a1+an)/2。注意： 以上整数。</p><h2 id="通项公式" tabindex="-1">通项公式 <a class="header-anchor" href="#通项公式" aria-hidden="true">#</a></h2><p>等差数列求和的通项公式为：Sn=n*a1+n(n-1)d/2</p><p>改成 js 函数就是：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * n: 项数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * a1: 第一项的值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * d: 公差</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">a1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">d</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">fn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 5050</span></span>
<span class="line"></span></code></pre></div>`,6),t=[o];function e(c,r,y,i,F,D){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};

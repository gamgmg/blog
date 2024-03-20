import{_ as s,c as a,o as n,a as l}from"./app.d8295fa7.js";const i=JSON.parse(`{"title":"vue3","description":"","frontmatter":{},"headers":[{"level":2,"title":"开发动态路由的坑","slug":"开发动态路由的坑","link":"#开发动态路由的坑","children":[{"level":3,"title":"使用vite3时无法通过使用require.context方法获取路由文件夹内容，可以使用i​mport.meta.glob('./modules/*.ts', { eager: true }) 方法代替","slug":"使用vite3时无法通过使用require-context方法获取路由文件夹内容-可以使用import-meta-glob-modules-ts-eager-true-方法代替","link":"#使用vite3时无法通过使用require-context方法获取路由文件夹内容-可以使用import-meta-glob-modules-ts-eager-true-方法代替","children":[]},{"level":3,"title":"添加{ path: '/:pathMatch(.*)', redirect: '/404', hidden: true }路由时，要放在动态路由栈里，如果放在静态路由栈，由于动态路由栈中的路由还没插入到routes里面，会导致刷新页面时跳转到404页面","slug":"添加-path-pathmatch-redirect-404-hidden-true-路由时-要放在动态路由栈里-如果放在静态路由栈-由于动态路由栈中的路由还没插入到routes里面-会导致刷新页面时跳转到404页面","link":"#添加-path-pathmatch-redirect-404-hidden-true-路由时-要放在动态路由栈里-如果放在静态路由栈-由于动态路由栈中的路由还没插入到routes里面-会导致刷新页面时跳转到404页面","children":[]}]}],"relativePath":"issues/vue3.md"}`),o={name:"issues/vue3.md"},p=l(`<h1 id="vue3" tabindex="-1">vue3 <a class="header-anchor" href="#vue3" aria-hidden="true">#</a></h1><h2 id="开发动态路由的坑" tabindex="-1">开发动态路由的坑 <a class="header-anchor" href="#开发动态路由的坑" aria-hidden="true">#</a></h2><h3 id="使用vite3时无法通过使用require-context方法获取路由文件夹内容-可以使用import-meta-glob-modules-ts-eager-true-方法代替" tabindex="-1">使用vite3时无法通过使用require.context方法获取路由文件夹内容，可以使用i<wbr>mport.meta.glob(&#39;./modules/*.ts&#39;, { eager: true }) 方法代替 <a class="header-anchor" href="#使用vite3时无法通过使用require-context方法获取路由文件夹内容-可以使用import-meta-glob-modules-ts-eager-true-方法代替" aria-hidden="true">#</a></h3><p>例子：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> files</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">glob</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./modules/*.ts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">eager</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> modules </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> files) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">modules</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">files</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="添加-path-pathmatch-redirect-404-hidden-true-路由时-要放在动态路由栈里-如果放在静态路由栈-由于动态路由栈中的路由还没插入到routes里面-会导致刷新页面时跳转到404页面" tabindex="-1">添加{ path: &#39;/:pathMatch(.*)&#39;, redirect: &#39;/404&#39;, hidden: true }路由时，要放在动态路由栈里，如果放在静态路由栈，由于动态路由栈中的路由还没插入到routes里面，会导致刷新页面时跳转到404页面 <a class="header-anchor" href="#添加-path-pathmatch-redirect-404-hidden-true-路由时-要放在动态路由栈里-如果放在静态路由栈-由于动态路由栈中的路由还没插入到routes里面-会导致刷新页面时跳转到404页面" aria-hidden="true">#</a></h3><p>例子：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> whileList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/404</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/customFormDemoRoot</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/notice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">modules</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/:pathMatch(.*)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">redirect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/404</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">hidden</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> constRoutes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [] </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NewRouteRecordRaw</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> asyncRoutes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [] </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NewRouteRecordRaw</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">modules</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">route</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">constRoutes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">route</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">whileList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">constRoutes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">route</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 放在动态路由栈里</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">asyncRoutes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">route</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,8),e=[p];function t(r,c,D,y,F,C){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{i as __pageData,d as default};
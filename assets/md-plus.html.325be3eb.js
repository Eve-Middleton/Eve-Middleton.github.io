import{_ as p,r as l,o as r,c,d as a,w as e,a as i,b as n,e as s}from"./app.afc0bc18.js";const u={},d=i('<p><a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-md-plus/v/next" target="_blank"><img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-md-plus/next.svg?style=flat-square&amp;logo=npm" style="display:inline;margin:0 4px 0 0;" alt="npm"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/md-plus" target="_blank"><img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--md--plus-26A2FF?style=flat-square&amp;logo=github" style="display:inline;margin:0 4px 0 0;" alt="github"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/md-plus/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display:inline;margin:0 4px 0 0;" alt="license"></a></p><p><code>@renovamen/vuepress-plugin-md-plus</code> \u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5728 <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress 2</a> \u7684 Markdown \u4E2D\u52A0\u5165\u66F4\u591A\u8BED\u6CD5\u548C\u529F\u80FD\u3002\u76EE\u524D\u652F\u6301\uFF1A</p><ul><li>\u811A\u6CE8\uFF08\u57FA\u4E8E <a href="https://github.com/markdown-it/markdown-it-footnote" target="_blank" rel="noopener noreferrer">markdown-it-footnote</a>\uFF09</li><li>\u9AD8\u4EAE\u6807\u8BB0\uFF08\u57FA\u4E8E <a href="https://github.com/markdown-it/markdown-it-footnote" target="_blank" rel="noopener noreferrer">markdown-it-footnote</a>\uFF09</li><li>\u4E0B\u6807 (\u57FA\u4E8E <a href="https://github.com/markdown-it/markdown-it-sub" target="_blank" rel="noopener noreferrer">markdown-it-sub</a>)</li><li>\u4E0A\u6807 (\u57FA\u4E8E <a href="https://github.com/markdown-it/markdown-it-sup" target="_blank" rel="noopener noreferrer">markdown-it-sup</a>)</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2>',4),m=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"install"),s(` @renovamen/vuepress-plugin-md-plus@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` @renovamen/vuepress-plugin-md-plus@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` @renovamen/vuepress-plugin-md-plus@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),k=i(`<h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u4F60\u53EF\u4EE5\u5728 <code>.vuepress/config.js</code> \u4E2D\u4E00\u952E\u542F\u7528\u6240\u6709\u529F\u80FD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> mdPlusPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@renovamen/vuepress-plugin-md-plus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdPlusPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">all</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u5168\u90E8\u542F\u7528\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E\u5176\u4ED6\u914D\u7F6E\u9879\uFF08\u9ED8\u8BA4\uFF1Afalse\uFF09</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u5206\u522B\u542F\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdPlusPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">footnote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u811A\u6CE8\uFF08\u9ED8\u8BA4\uFF1Afalse\uFF09</span>
      <span class="token literal-property property">mark</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u9AD8\u4EAE\u6807\u8BB0\uFF08\u9ED8\u8BA4\uFF1Afalse\uFF09</span>
      <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0B\u6807\uFF08\u9ED8\u8BA4\uFF1Afalse\uFF09</span>
      <span class="token literal-property property">sup</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u4E0A\u6807\uFF08\u9ED8\u8BA4\uFF1Afalse\uFF09</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u811A\u6CE8" tabindex="-1"><a class="header-anchor" href="#\u811A\u6CE8" aria-hidden="true">#</a> \u811A\u6CE8</h3><p>\u7ED9\u6587\u5B57\u52A0\u4E0A\u811A\u6CE8<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p><details class="custom-container details"><summary>\u8BED\u6CD5</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7ED9\u6587\u5B57\u52A0\u4E0A\u811A\u6CE8[^1]

[^1]: \u811A\u6CE8\u5185\u5BB9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u9AD8\u4EAE\u6807\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u4EAE\u6807\u8BB0" aria-hidden="true">#</a> \u9AD8\u4EAE\u6807\u8BB0</h3><p>\u9AD8\u4EAE\u6807\u8BB0\u91CD\u8981\u7684\u5185\u5BB9\uFF1A\u886C\u886B\u7684\u4EF7\u683C\u662F <mark>\u4E5D\u78C5\u5341\u4E94\u4FBF\u58EB</mark></p><details class="custom-container details"><summary>\u8BED\u6CD5</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u886C\u886B\u7684\u4EF7\u683C\u662F ==\u4E5D\u78C5\u5341\u4E94\u4FBF\u58EB==
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h3 id="\u4E0B\u6807" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u6807" aria-hidden="true">#</a> \u4E0B\u6807</h3><p>H<sub>2</sub>O</p><details class="custom-container details"><summary>\u8BED\u6CD5</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>H<span class="token strike"><span class="token punctuation">~</span><span class="token content">2</span><span class="token punctuation">~</span></span>O
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h3 id="\u4E0A\u6807" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u6807" aria-hidden="true">#</a> \u4E0A\u6807</h3><p>29<sup>th</sup></p><details class="custom-container details"><summary>\u8BED\u6CD5</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>29^th^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><hr><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>\u811A\u6CE8\u5185\u5BB9 <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,21);function b(g,f){const t=l("CodeGroupItem"),o=l("CodeGroup");return r(),c("div",null,[d,a(o,null,{default:e(()=>[a(t,{title:"PNPM",active:""},{default:e(()=>[m]),_:1}),a(t,{title:"YARN",active:""},{default:e(()=>[v]),_:1}),a(t,{title:"NPM"},{default:e(()=>[h]),_:1})]),_:1}),k])}var _=p(u,[["render",b],["__file","md-plus.html.vue"]]);export{_ as default};

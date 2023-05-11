import{_ as l,r as i,o as p,c as u,d as a,w as s,a as o,b as n,e}from"./app.afc0bc18.js";const c={},d=o('<p><a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-baidu-tongji/v/next" target="_blank"><img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-baidu-tongji/next.svg?style=flat-square&amp;logo=npm" style="display:inline;margin:0 4px 0 0;" alt="npm"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/baidu-tongji" target="_blank"><img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--baidu--tongji-26A2FF?style=flat-square&amp;logo=github" style="display:inline;margin:0 4px 0 0;" alt="github"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/baidu-tongji/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display:inline;margin:0 4px 0 0;" alt="license"></a></p><p><code>@renovamen/vuepress-plugin-baidu-tongji@next</code> \u63D2\u4EF6\uFF0C\u7528\u4E8E\u5728 <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress 2</a> \u4E2D\u5F15\u5165<a href="https://tongji.baidu.com" target="_blank" rel="noopener noreferrer">\u767E\u5EA6\u7EDF\u8BA1</a>\u3002\u4FEE\u6539\u81EA <a href="https://github.com/vuepress/vuepress-next/tree/main/packages/%40vuepress/plugin-google-analytics" target="_blank" rel="noopener noreferrer">@vuepress/plugin-google-analytics</a>\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2>',3),g=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"install"),e(` @renovamen/vuepress-plugin-baidu-tongji@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"add"),e(` @renovamen/vuepress-plugin-baidu-tongji@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(),n("span",{class:"token function"},"install"),e(` @renovamen/vuepress-plugin-baidu-tongji@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),v=o(`<h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u9700\u8981\u53BB<a href="https://tongji.baidu.com" target="_blank" rel="noopener noreferrer">\u767E\u5EA6\u7EDF\u8BA1</a>\u5B98\u7F51\u4E0A\u7533\u8BF7\u4E00\u4E2A\u8DDF\u8E2A\u4EE3\u7801\uFF0C\u7136\u540E\u5728 <code>.vuepress/config.js</code> \u4E2D\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> baiduTongjiPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@renovamen/vuepress-plugin-baidu-tongji&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">baiduTongjiPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;your-tracking-code&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F00\u6E90\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5F00\u6E90\u534F\u8BAE" aria-hidden="true">#</a> \u5F00\u6E90\u534F\u8BAE</h2><p><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/baidu-tongji/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a></p>`,5);function b(k,f){const t=i("CodeGroupItem"),r=i("CodeGroup");return p(),u("div",null,[d,a(r,null,{default:s(()=>[a(t,{title:"PNPM",active:""},{default:s(()=>[g]),_:1}),a(t,{title:"YARN",active:""},{default:s(()=>[m]),_:1}),a(t,{title:"NPM"},{default:s(()=>[h]),_:1})]),_:1}),v])}var j=l(c,[["render",b],["__file","baidu-tongji.html.vue"]]);export{j as default};

import{_ as u,r as p,o as i,c,d as a,w as e,b as n,a as t,e as s}from"./app.afc0bc18.js";const d={},k=t('<p><a href="https://www.npmjs.com/package/vuepress-plugin-chart/v/next" target="_blank"><img src="https://img.shields.io/npm/v/vuepress-plugin-chart/next.svg?style=flat-square&amp;logo=npm" style="display:inline;margin:0 4px 0 0;" alt="npm"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/chart" target="_blank"><img src="https://img.shields.io/badge/GitHub-vuepress--plugin--chart-26A2FF?style=flat-square&amp;logo=github" style="display:inline;margin:0 4px 0 0;" alt="github"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/chart/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display:inline;margin:0 4px 0 0;" alt="license"></a></p><p>Plugin <code>vuepress-plugin-chart@next</code> for adding JavaScript charting library <a href="https://www.chartjs.org" target="_blank" rel="noopener noreferrer">Chart.js</a> to <a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress 2</a> to create interactive charts in Markdown.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2>',3),b=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"install"),s(` vuepress-plugin-chart@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` vuepress-plugin-chart@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` vuepress-plugin-chart@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),g=t(`<p>Then add it to your <code>.vuepress/config.js</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> chartPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;vuepress-plugin-chart&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">chartPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> token</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&quot;chart&quot;</code></p></li><li><p>Details: Custom token of the fenced code block.</p></li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>The token info of the code block should be <code>chart</code> (or <code>options.token</code> if you set), for example:</p>`,7),h=t(`<details class="custom-container details"><summary>Code</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>\`\`\`chart
<span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;doughnut&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;rgba(255, 99, 132)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;rgba(255, 206, 86)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;rgba(54, 162, 235)&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Red&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Yellow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Blue&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),q={class:"custom-container danger"},f={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},_=n("path",{d:"M297.64 123.31C133.55 123.31 0 256.83 0 420.94c0 164.11 133.55 297.64 297.64 297.64 164.09 0 297.64-133.52 297.64-297.64 0-164.12-133.55-297.63-297.64-297.63Zm107.8 333.25H189.83c-19.541 0-35.62-16.079-35.62-35.62 0-19.541 16.079-35.62 35.62-35.62h215.61c19.541 0 35.62 16.079 35.62 35.62 0 19.541-16.079 35.62-35.62 35.62Z",style:{fill:"#f55","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.179)"},null,-1),y=[_],x=n("p",{class:"custom-container-title"},"DANGER",-1),w=n("p",null,[s("The "),n("strong",null,"key"),s(" should be in quotes, or some unexpected errors will occured.")],-1),C=n("p",null,[s("Functions should be stringified before being passed through "),n("code",null,"callback"),s(". The following example shows how to change the tick marks of y-axis using "),n("code",null,"callback"),s(":")],-1),j=t(`<details class="custom-container details"><summary>Code</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>\`\`\`chart
<span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Red&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Blue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Yellow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Green&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Purple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Salary&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;rgba(255, 99, 132, 1)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;rgba(54, 162, 235, 1)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;rgba(255, 206, 86, 1)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;rgba(75, 192, 192, 1)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;rgba(153, 102, 255, 1)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;rgba(255, 159, 64, 1)&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ticks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;beginAtZero&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;callback&quot;</span><span class="token operator">:</span> <span class="token string">&quot;function(value){ return &#39;\uFFE5&#39; + value + &#39;k&#39;; }&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
\`\`\`
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>Refer to the <a href="https://www.chartjs.org/docs/latest/" target="_blank" rel="noopener noreferrer">documentation of Chart.js</a> for more information.</p><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2><p><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/chart/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a></p>`,4);function N(R,P){const o=p("CodeGroupItem"),r=p("CodeGroup"),l=p("Chart");return i(),c("div",null,[k,a(r,null,{default:e(()=>[a(o,{title:"PNPM",active:""},{default:e(()=>[b]),_:1}),a(o,{title:"YARN",active:""},{default:e(()=>[v]),_:1}),a(o,{title:"NPM"},{default:e(()=>[m]),_:1})]),_:1}),g,a(l,{id:"chart_382ee1ab","data-code":`{
  "type": "doughnut",
  "data": {
    "datasets": [{
      "data": [10, 20, 30],
      "backgroundColor": [
        "rgba(255, 99, 132)",
        "rgba(255, 206, 86)",
        "rgba(54, 162, 235)"
      ]
    }],
    "labels": ["Red", "Yellow", "Blue"]
  }
}`}),h,n("div",q,[(i(),c("svg",f,y)),x,w]),C,a(l,{id:"chart_382ee1e1","data-code":`{
  "type": "bar",
  "data": {
    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "datasets": [{
      "label": "Salary",
      "data": [12, 19, 3, 5, 2, 3],
      "backgroundColor": [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ]
    }]
  },
  "options": {
    "scales": {
      "y": {
        "ticks": {
          "beginAtZero": true,
          "callback": "function(value){ return '\uFFE5' + value + 'k'; }"
        }
      }
    }
  }
}`}),j])}var G=u(d,[["render",N],["__file","chart.html.vue"]]);export{G as default};

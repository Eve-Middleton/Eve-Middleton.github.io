import{u as R,i as S,j as $e,_ as N,f as B,o,c as v,b as c,h as n,k as ke,r as D,l as E,v as F,d as f,m as ye,n as G,p as ue,q as Se,s as X,t as A,x as ie,g as x,y as C,z as H,w as P,A as L,T as we,B as ce,C as O,D as Y,F as q,E as K,G as W,H as J,I as z,J as de,K as Te,L as Ie,M as Le,N as xe,O as ve,P as Ce,Q as Ne,R as Be,e as Ve,S as ge,U as Me}from"./app.afc0bc18.js";const re=g=>decodeURI(g).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Oe=(g,t)=>{if(t.hash===g)return!0;const e=re(t.path),l=re(g);return e===l},pe=(g,t)=>g.link&&Oe(g.link,t)?!0:g.children?g.children.some(e=>pe(e,t)):!1,Re=()=>{const g=R(),t=$e();return S(()=>t.value.frontmatter.layout==="Post"&&t.value.frontmatter.catalog!==!1&&(g.value.catalog||t.value.frontmatter.catalog)&&t.value.headers.length>0)},De={class:"footer"},Pe=["innerHTML"],He=B({__name:"Footer",setup(g){const e=R().value.footer;return(l,s)=>(o(),v("footer",De,[c("span",{innerHTML:n(e)},null,8,Pe)]))}});var Ee=N(He,[["__file","Footer.vue"]]);const Fe=["title"],Ae=B({__name:"ToggleColorModeButton",setup(g){const t=["light","dark","auto"],e=R(),{currentMode:l}=ke(),s=()=>{const $=(t.indexOf(l.value)+1)%t.length;l.value=t[$]};return(h,$)=>{const m=D("VIcon");return o(),v("div",{title:n(e).toggleColorMode,onClick:s},[E(f(m,{name:"fa-sun"},null,512),[[F,n(l)==="light"]]),E(f(m,{name:"fa-moon"},null,512),[[F,n(l)==="dark"]]),E(f(m,{name:"fa-magic"},null,512),[[F,n(l)==="auto"]])],8,Fe)}}});var qe=N(Ae,[["__file","ToggleColorModeButton.vue"]]);const We=["title"],Ke=B({__name:"ToggleSidebarButton",emits:["toggle"],setup(g){const t=R();return(e,l)=>{const s=D("VIcon");return o(),v("div",{class:"toggle-sidebar-button",title:n(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=h=>e.$emit("toggle"))},[f(s,{name:"bi-layout-sidebar-inset"})],8,We)}}});var ze=N(Ke,[["__file","ToggleSidebarButton.vue"]]);const je={class:"menu-btn-wrapper"},Ue={class:"menu-btn-icon"},Ge=c("span",null,null,-1),Xe=c("span",null,null,-1),Ye=c("span",null,null,-1),Je=[Ge,Xe,Ye],Qe={class:"menu-progress"},Ze={class:"menu-btn-child-wrapper"},et=B({__name:"Menu",emits:["toggle-sidebar","toggle-catalog"],setup(g){const t=R(),e=ye({isMenuOpen:!1,isTextVisible:!1,isBtnIconVisible:!0,menuText:"0",borderLen:"0% 314.15926%"});G(()=>{const{y:i}=ue(document),r=Se().height;X(i,()=>{const a=$();let p=i.value/(a-r.value)*100;p>100&&(p=100),isNaN(p)||Math.round(p)<=0?(p=0,e.isTextVisible=!1,e.isBtnIconVisible=!0):(e.isTextVisible=!0,e.menuText=Math.round(p)+"%",e.isBtnIconVisible=!1),e.borderLen=3.1415926*(p||0)+"% 314.15926%"})});const l=()=>{e.isMenuOpen=!e.isMenuOpen},s=()=>{window.scrollTo({top:0,behavior:"smooth"})},h=()=>{window.scrollTo({top:$(),behavior:"smooth"})},$=()=>{const i=document.querySelector(".theme-container");return(i==null?void 0:i.offsetHeight)||0},m=Re();return(i,r)=>{const b=D("VIcon");return o(),v("div",{class:H(["menu-btn-container",{open:e.isMenuOpen}])},[c("div",je,[c("div",{class:"menu-btn",onClick:l},[E(c("div",Ue,Je,512),[[F,e.isBtnIconVisible]]),E(c("div",{class:"menu-text"},A(e.menuText),513),[[F,e.isTextVisible]]),(o(),v("svg",Qe,[c("circle",{class:"menu-border",cx:"50%",cy:"50%",r:"48%",style:ie({"stroke-dasharray":e.borderLen})},null,4)]))]),c("div",Ze,[n(t).colorModeSwitch?(o(),x(qe,{key:0,class:"menu-btn-child"})):C("",!0),c("div",{class:"menu-btn-child",onClick:h},[f(b,{name:"fa-chevron-down"})]),c("div",{class:"menu-btn-child",onClick:s},[f(b,{name:"fa-chevron-up"})]),n(m)?(o(),v("div",{key:1,class:"menu-btn-child menu-toc-btn",onClick:r[0]||(r[0]=a=>i.$emit("toggle-catalog"))},[f(b,{name:"fa-list-ul"})])):C("",!0),f(ze,{class:"menu-btn-child menu-btn-sidebar",onToggle:r[1]||(r[1]=a=>i.$emit("toggle-sidebar"))})])])],2)}}});var tt=N(et,[["__file","Menu.vue"]]);const nt=B({__name:"DropdownTransition",setup(g){const t=l=>{l.style.height=l.scrollHeight+"px"},e=l=>{l.style.height=""};return(l,s)=>(o(),x(we,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:P(()=>[L(l.$slots,"default")]),_:3}))}});var he=N(nt,[["__file","DropdownTransition.vue"]]);const at=["aria-label"],ot={class:"title"},st={key:0,class:"nav-icon"},lt=c("span",{class:"arrow down"},null,-1),rt=["aria-label"],ut={class:"title"},it={key:0,class:"nav-icon"},ct={class:"navbar-dropdown"},dt={class:"navbar-dropdown-subtitle"},vt={key:1},gt={class:"navbar-navbar-dropdown-subitem-wrapper"},pt=B({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(g){const t=g,{item:e}=ce(t),l=S(()=>e.value.ariaLabel||e.value.text),s=O(!1),h=Y();X(()=>h.path,()=>{s.value=!1});const $=i=>{i.detail===0?s.value=!s.value:s.value=!1},m=(i,r)=>r[r.length-1]===i;return(i,r)=>{const b=D("VIcon");return o(),v("div",{class:H(["navbar-dropdown-wrapper",{open:s.value}])},[c("button",{class:"navbar-dropdown-title",type:"button","aria-label":n(l),onClick:$},[c("span",ot,[n(e).icon?(o(),v("span",st,[f(b,{name:n(e).icon},null,8,["name"])])):C("",!0),c("span",null,A(n(e).text),1)]),lt],8,at),c("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":n(l),onClick:r[0]||(r[0]=a=>s.value=!s.value)},[c("span",ut,[n(e).icon?(o(),v("span",it,[f(b,{name:n(e).icon},null,8,["name"])])):C("",!0),c("span",null,A(n(e).text),1)]),c("span",{class:H(["arrow",s.value?"down":"right"])},null,2)],8,rt),f(he,null,{default:P(()=>[E(c("ul",ct,[(o(!0),v(q,null,K(n(e).children,a=>(o(),v("li",{key:a.text,class:"navbar-dropdown-item"},[a.children?(o(),v(q,{key:0},[c("h4",dt,[a.link?(o(),x(W,{key:0,item:a,onFocusout:p=>m(a,n(e).children)&&a.children.length===0&&(s.value=!1)},null,8,["item","onFocusout"])):(o(),v("span",vt,A(a.text),1))]),c("ul",gt,[(o(!0),v(q,null,K(a.children,p=>(o(),v("li",{key:p.link,class:"navbar-dropdown-subitem"},[f(W,{item:p,onFocusout:y=>m(p,a.children)&&m(a,n(e).children)&&(s.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),x(W,{key:1,item:a,onFocusout:p=>m(a,n(e).children)&&(s.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[F,s.value]])]),_:1})],2)}}});var ht=N(pt,[["__file","NavbarDropdown.vue"]]);const mt={key:0,class:"navbar-items"},bt={key:0,class:"navbar-item"},_t={key:0,class:"nav-icon"},ft=B({__name:"NavbarItems",emits:["toggle-search"],setup(g){const t=()=>{const a=z(),p=Te(),y=Ie(),k=R();return S(()=>{var d,M,I;const V=Object.keys(y.value.locales);if(V.length<2)return[];const _=a.currentRoute.value.path,w=a.currentRoute.value.fullPath,T=a.currentRoute.value.hash;return[{text:(d=k.value.selectLanguageText)!=null?d:"unknown language",ariaLabel:(I=(M=k.value.selectLanguageAriaLabel)!=null?M:k.value.selectLanguageText)!=null?I:"unknown language",icon:k.value.langIcon,children:V.map(j=>{var ee,te,ne,ae,oe,se;const be=(te=(ee=y.value.locales)==null?void 0:ee[j])!=null?te:{},Q=(ae=(ne=k.value.locales)==null?void 0:ne[j])!=null?ae:{},Z=`${be.lang}`,_e=(oe=Q.selectLanguageName)!=null?oe:Z;let U;if(Z===y.value.lang)U=w;else{const le=_.replace(p.value,j);a.getRoutes().some(fe=>fe.path===le)?U=`${le}${T}`:U=(se=Q.home)!=null?se:j}return{text:_e,link:U}})}]})},e=a=>Le(a)?xe(a):a.children?{...a,children:a.children.map(e)}:a,s=(()=>{const a=R();return S(()=>(a.value.navbar||[]).map(e))})(),h=t(),$=S(()=>[...s.value,...i.value?h.value:[]]),m=J(),i=S(()=>{const p=z().currentRoute.value.path;return m.value.layout===void 0&&p.indexOf("/page/")===-1&&de.value.path!==""}),r=R(),b=S(()=>r.value.search&&m.value.search!==!1);return(a,p)=>{const y=D("VIcon");return n($).length?(o(),v("nav",mt,[(o(!0),v(q,null,K(n($),k=>(o(),v("div",{key:k.text,class:"navbar-item"},[k.children?(o(),x(ht,{key:0,item:k},null,8,["item"])):(o(),x(W,{key:1,item:k},null,8,["item"]))]))),128)),n(b)?(o(),v("div",bt,[c("a",{style:{cursor:"pointer"},onClick:p[0]||(p[0]=k=>a.$emit("toggle-search"))},[n(r).searchIcon?(o(),v("span",_t,[f(y,{name:n(r).searchIcon},null,8,["name"])])):C("",!0),c("span",null,A(n(r).searchText),1)])])):C("",!0)])):C("",!0)}}});var me=N(ft,[["__file","NavbarItems.vue"]]);const $t={class:"site-name"},kt=B({__name:"Navbar",props:{isSidebar:{type:Boolean,required:!0}},emits:["toggle-search"],setup(g){const t=R(),e=J(),l=z(),s=O(null),h=O(null),$=S(()=>t.value.home||"/"),m=S(()=>t.value.navbarTitle),i=O(0),r=S(()=>i.value?{maxWidth:i.value+"px"}:{}),b=O(!1),a=O(!1),p=O(!0),y=()=>{let _=!1;e.value.layout==="HomePage"&&(_=!0),e.value.layout==="Post"&&e.value.useHeaderImage&&(_=!0),e.value.layout==="Tags"&&t.value.pages&&t.value.pages.tags&&t.value.pages.tags.bgImage&&(_=!0),e.value.layout==="Links"&&t.value.pages&&t.value.pages.links&&t.value.pages.links.bgImage&&(_=!0),p.value=_};let k;G(()=>{const w=V(s.value,"paddingLeft")+V(s.value,"paddingRight"),T=()=>{var I;window.innerWidth<=719||!s.value?i.value=0:i.value=s.value.offsetWidth-w-(((I=h.value)==null?void 0:I.offsetWidth)||0)};T(),window.addEventListener("resize",T,!1),window.addEventListener("orientationchange",T,!1);const{y:u,directions:d}=ue(document);X(u,()=>{d.top?u.value>0&&b.value?a.value=!0:(a.value=!1,b.value=!1):d.bottom&&(a.value=!1,s.value&&u.value>s.value.offsetHeight&&(b.value=!0))}),y(),k=l.afterEach(y)}),ve(()=>{k()});function V(_,w){var d,M,I;const T=(I=(M=(d=_==null?void 0:_.ownerDocument)==null?void 0:d.defaultView)==null?void 0:M.getComputedStyle(_,null))==null?void 0:I[w],u=Number.parseInt(T,10);return Number.isNaN(u)?0:u}return(_,w)=>{const T=D("RouterLink"),u=D("NavbarSearch");return o(),v("header",{ref_key:"navbar",ref:s,class:H(["navbar",{"is-fixed":b.value||g.isSidebar,"is-visible":a.value||g.isSidebar,invert:p.value}])},[c("span",{ref_key:"navbarBrand",ref:h},[f(T,{to:n($)},{default:P(()=>[c("span",$t,A(n(m)),1)]),_:1},8,["to"])],512),c("div",{class:"navbar-items-wrapper",style:ie(n(r))},[L(_.$slots,"before"),f(me,{class:"can-hide",onToggleSearch:w[0]||(w[0]=d=>_.$emit("toggle-search"))}),L(_.$slots,"after"),f(u)],4)],2)}}});var yt=N(kt,[["__file","Navbar.vue"]]);const St=["onKeydown"],wt={class:"sidebar-item-children"},Tt=B({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(g){const t=g,{item:e,depth:l}=ce(t),s=Y(),h=z(),$=S(()=>pe(e.value,s)),m=S(()=>({"sidebar-item":!0,"sidebar-heading":l.value===0,active:$.value,collapsible:e.value.collapsible})),i=S(()=>e.value.collapsible?$.value:!0),[r,b]=Ce(i.value),a=y=>{e.value.collapsible&&(y.preventDefault(),b())},p=h.afterEach(y=>{Ne(()=>{r.value=i.value})});return ve(()=>{p()}),(y,k)=>{var _;const V=D("SidebarItem",!0);return o(),v("li",null,[n(e).link?(o(),x(W,{key:0,class:H(n(m)),item:n(e)},null,8,["class","item"])):(o(),v("p",{key:1,tabindex:"0",class:H(n(m)),onClick:a,onKeydown:Be(a,["enter"])},[Ve(A(n(e).text)+" ",1),n(e).collapsible?(o(),v("span",{key:0,class:H(["arrow",n(r)?"down":"right"])},null,2)):C("",!0)],42,St)),(_=n(e).children)!=null&&_.length?(o(),x(he,{key:2},{default:P(()=>[E(c("ul",wt,[(o(!0),v(q,null,K(n(e).children,w=>(o(),x(V,{key:`${n(l)}${w.text}${w.link}`,item:w,depth:n(l)+1},null,8,["item","depth"]))),128))],512),[[F,n(r)]])]),_:1})):C("",!0)])}}});var It=N(Tt,[["__file","SidebarItem.vue"]]);const Lt={key:0,class:"sidebar-items"},xt=B({__name:"SidebarItems",setup(g){const t=Y(),e=ge();return G(()=>{X(()=>t.hash,l=>{const s=document.querySelector(".sidebar");if(!s)return;const h=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${l}"]`);if(!h)return;const{top:$,height:m}=s.getBoundingClientRect(),{top:i,height:r}=h.getBoundingClientRect();i<$?h.scrollIntoView(!0):i+r>$+m&&h.scrollIntoView(!1)})}),(l,s)=>n(e).length?(o(),v("ul",Lt,[(o(!0),v(q,null,K(n(e),h=>(o(),x(It,{key:`${h.text}${h.link}`,item:h},null,8,["item"]))),128))])):C("",!0)}});var Ct=N(xt,[["__file","SidebarItems.vue"]]);const Nt={class:"sidebar"},Bt=B({__name:"Sidebar",emits:["toggle-search"],setup(g){return(t,e)=>(o(),v("aside",Nt,[f(me,{onToggleSearch:e[0]||(e[0]=l=>t.$emit("toggle-search"))}),L(t.$slots,"top"),f(Ct),L(t.$slots,"bottom")]))}});var Vt=N(Bt,[["__file","Sidebar.vue"]]);const Mt={class:"page-content"},Ot=B({__name:"Common",setup(g){const t=J(),e=R(),l=z(),s=S(()=>t.value.navbar!==!1&&e.value.navbar!==!1),h=S(()=>de.value.path===""),$=ge(),m=S(()=>$.value.length>0&&!h.value),i=O(!1),r=u=>{i.value=typeof u=="boolean"?u:!i.value},b={x:0,y:0},a=u=>{b.x=u.changedTouches[0].clientX,b.y=u.changedTouches[0].clientY},p=u=>{const d=u.changedTouches[0].clientX-b.x,M=u.changedTouches[0].clientY-b.y;Math.abs(d)>Math.abs(M)&&Math.abs(d)>40&&(d>0&&b.x<=80?r(!0):r(!1))},y=O(!1),k=u=>{y.value=typeof u=="boolean"?u:!y.value;const d=document.querySelector("html");y.value?d==null||d.classList.add("fixed"):d==null||d.classList.remove("fixed"),y.value&&setTimeout(function(){document.querySelector(".search-page input").focus()},400)},V=O(!1),_=u=>{V.value=typeof u=="boolean"?u:!V.value},w=S(()=>[{"no-navbar":!s.value,"no-sidebar":!m.value,"sidebar-open":i.value,"catalog-open":V.value,"search-open":y.value},t.value.pageClass]);let T;return G(()=>{T=l.afterEach(()=>{r(!1),k(!1)})}),Me(()=>{T()}),(u,d)=>{const M=D("GungnirSearchPage");return o(),v("div",{class:H(["theme-container",n(w)]),onTouchstart:a,onTouchend:p},[L(u.$slots,"navbar",{},()=>[n(s)?(o(),x(yt,{key:0,"is-sidebar":n(m),onToggleSearch:d[0]||(d[0]=I=>k(!0))},{before:P(()=>[L(u.$slots,"navbar-before")]),after:P(()=>[L(u.$slots,"navbar-after")]),_:3},8,["is-sidebar"])):C("",!0)]),c("div",{class:"sidebar-mask",onClick:d[1]||(d[1]=I=>r(!1))}),L(u.$slots,"sidebar",{},()=>[f(Vt,{onToggleSearch:d[2]||(d[2]=I=>k(!0))},{top:P(()=>[L(u.$slots,"sidebar-top")]),bottom:P(()=>[L(u.$slots,"sidebar-bottom")]),_:3})]),c("div",Mt,[L(u.$slots,"page")]),f(M,{onToggleSearch:d[3]||(d[3]=I=>k(!1))}),f(tt,{onToggleSidebar:r,onToggleCatalog:_}),n(m)?C("",!0):(o(),x(Ee,{key:0}))],34)}}});var Dt=N(Ot,[["__file","Common.vue"]]);export{Dt as C,Re as u};

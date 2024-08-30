"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[3249],{82907:(e,t,n)=>{n.d(t,{A:()=>O});n(96540);var a=n(18215),i=n(44096),r=n(74848);function s(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var o=n(28774);const l={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:s}=(0,i.e7)(),{permalink:c,title:d}=n,u=s?"h1":"h2";return(0,r.jsx)(u,{className:(0,a.A)(l.title,t),children:s?d:(0,r.jsx)(o.A,{to:c,children:d})})}var d=n(21312),u=n(53465),m=n(36266);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function f(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function p(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function x(e){let{className:t}=e;const{metadata:n}=(0,i.e7)(),{date:s,readingTime:o}=n,l=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,a.A)(g.container,"margin-vert--md",t),children:[(0,r.jsx)(f,{date:s,formattedDate:(c=s,l.format(new Date(c)))}),void 0!==o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(h,{readingTime:o})]})]});var c}var v=n(56913);const j={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e;const{metadata:{authors:n},assets:s}=(0,i.e7)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t})),l=1===n.length;return(0,r.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",o?j.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,a.A)(!o&&(l?"col col--12":"col col--6"),o?j.imageOnlyAuthorCol:j.authorCol),children:(0,r.jsx)(v.A,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(x,{}),(0,r.jsx)(b,{})]})}var y=n(70440),N=n(9911);function L(e){let{children:t,className:n}=e;const{isBlogPostPage:s}=(0,i.e7)();return(0,r.jsx)("div",{id:s?y.LU:void 0,className:(0,a.A)("markdown",n),children:(0,r.jsx)(N.A,{children:t})})}var _=n(17559),C=n(4336),T=n(62053);function k(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function H(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(o.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(k,{})})}function w(){const{metadata:e,isBlogPostPage:t}=(0,i.e7)(),{tags:n,title:s,editUrl:o,hasTruncateMarker:l,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&l,m=n.length>0;if(!(m||u||o))return null;if(t){const e=!!(o||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,a.A)("row","margin-top--sm",_.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(T.A,{tags:n})})}),e&&(0,r.jsx)(C.A,{className:(0,a.A)("margin-top--sm",_.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,a.A)("col",{"col--9":u}),children:(0,r.jsx)(T.A,{tags:n})}),u&&(0,r.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":m}),children:(0,r.jsx)(H,{blogPostTitle:s,to:e.permalink})})]})}function O(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,i.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(s,{className:(0,a.A)(o,n),children:[(0,r.jsx)(A,{}),(0,r.jsx)(L,{children:t}),(0,r.jsx)(w,{})]})}},32234:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var a=n(18215),i=n(44084),r=n(17559),s=n(27293),o=n(74848);function l(e){let{className:t}=e;return(0,o.jsx)(s.A,{type:"caution",title:(0,o.jsx)(i.Rc,{}),className:(0,a.A)(t,r.G.common.unlistedBanner),children:(0,o.jsx)(i.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.AE,{}),(0,o.jsx)(l,{...e})]})}},41689:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var a=n(18215),i=n(44084),r=n(17559),s=n(27293),o=n(74848);function l(e){let{className:t}=e;return(0,o.jsx)(s.A,{type:"caution",title:(0,o.jsx)(i.Yh,{}),className:(0,a.A)(t,r.G.common.draftBanner),children:(0,o.jsx)(i.TT,{})})}var c=n(32234);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||a.unlisted)&&(0,o.jsx)(c.A,{}),a.draft&&(0,o.jsx)(l,{})]})}},67763:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var a=n(18215),i=n(65195);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=n(74848);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,a.A)(r.tableOfContents,"thin-scrollbar",t),children:(0,s.jsx)(i.A,{...n,linkClassName:o,linkActiveClassName:l})})}},65195:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(96540),i=n(6342);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),c=l(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(28774),m=n(74848);function g(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const f=(0,i.p)(),p=c??f.tableOfContents.minHeadingLevel,x=u??f.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>s({toc:r(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:p,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:x}}),[o,l,p,x])),(0,m.jsx)(h,{toc:v,className:n,linkClassName:o,...g})}},44084:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>s,TT:()=>d,Uh:()=>o,Yh:()=>c});n(96540);var a=n(21312),i=n(5260),r=n(74848);function s(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},26699:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),i=n(74848);function r({id:e,host:t,repo:r,repoId:s,category:o,categoryId:l,mapping:c,term:d,strict:u,reactionsEnabled:m,emitMetadata:g,inputPosition:h,theme:f,lang:p,loading:x}){const[v,j]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{v||(n.e(1135).then(n.bind(n,1135)),j(!0))}),[]),v?(0,i.jsx)("giscus-widget",{id:e,host:t,repo:r,repoid:s,category:o,categoryid:l,mapping:c,term:d,strict:u,reactionsenabled:m,emitmetadata:g,inputposition:h,theme:f,lang:p,loading:x}):null}var s=n(95293);function o(){const{colorMode:e}=(0,s.G)();return(0,i.jsx)(r,{repo:"Ouch1978/ouch1978.github.io",repoId:"R_kgDOG-7JAg",category:"Announcements",categoryId:"DIC_kwDOG-7JAs4Cbsvt",mapping:"title",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:e,lang:"zh-TW",loading:"lazy",crossorigin:"anonymous",async:!0})}},76315:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(96540);var a=n(20053),i=n(45500),r=n(17559),s=n(44096),o=n(28027),l=n(82907),c=n(21312),d=n(39022),u=n(74848);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,s.e7)(),{title:n,description:a,date:r,tags:o,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(i.be,{title:n,description:a,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:r}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var h=n(5260);function f(){const e=(0,s.J_)();return(0,u.jsx)(h.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=n(67763),x=n(41689),v=n(26699);function j(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:i}=(0,s.e7)(),{nextItem:r,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:f}=d;return(0,u.jsxs)(o.A,{sidebar:t,toc:!g&&i.length>0?(0,u.jsx)(p.A,{toc:i,minHeadingLevel:h,maxHeadingLevel:f}):void 0,children:[(0,u.jsx)(x.A,{metadata:a}),(0,u.jsx)(l.A,{children:n}),(0,u.jsx)(v.A,{}),(r||c)&&(0,u.jsx)(m,{nextItem:r,prevItem:c})]})}function b(e){const t=e.content;return(0,u.jsx)(s.in,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(f,{}),(0,u.jsx)(j,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},20053:(e,t,n)=>{function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}n.d(t,{A:()=>i});const i=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}}}]);
"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[6103],{65203:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(67294),r=n(34334),l=n(10833),i=n(35281),o=n(9460),c=n(39058),s=n(30390),u=n(83117),m=n(95999),d=n(32244);function v(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,u.Z)({},n,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,u.Z)({},t,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){var e,t=(0,o.C)(),n=t.assets,r=t.metadata,i=r.title,c=r.description,s=r.date,u=r.tags,m=r.authors,d=r.frontMatter,v=d.keywords,f=null!=(e=n.image)?e:d.image;return a.createElement(l.d,{title:i,description:c,keywords:v,image:f},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),m.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:m.map((function(e){return e.url})).filter(Boolean).join(",")}),u.length>0&&a.createElement("meta",{property:"article:tag",content:u.map((function(e){return e.label})).join(",")}))}var g=n(39407);function p(e){var t=e.sidebar,n=e.children,r=(0,o.C)(),l=r.metadata,i=r.toc,u=l.nextItem,m=l.prevItem,d=l.frontMatter,f=d.hide_table_of_contents,p=d.toc_min_heading_level,h=d.toc_max_heading_level;return a.createElement(c.Z,{sidebar:t,toc:!f&&i.length>0?a.createElement(g.Z,{toc:i,minHeadingLevel:p,maxHeadingLevel:h}):void 0},a.createElement(s.Z,null,n),(u||m)&&a.createElement(v,{nextItem:u,prevItem:m}))}function h(e){var t=e.content;return a.createElement(o.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},a.createElement(f,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},39407:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(83117),r=n(80102),l=n(67294),i=n(34334),o=n(93743),c="tableOfContents_bqdL",s=["className"];function u(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(83117),r=n(80102),l=n(67294),i=n(86668),o=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,o);n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function m(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return u(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,l.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=m(o,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function f(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var g=l.memo(f),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,f=void 0===d?void 0:d,h=e.minHeadingLevel,b=e.maxHeadingLevel,L=(0,r.Z)(e,p),E=(0,i.L)(),H=null!=h?h:E.tableOfContents.minHeadingLevel,N=null!=b?b:E.tableOfContents.maxHeadingLevel,x=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:H,maxHeadingLevel:N});return v((0,l.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:H,maxHeadingLevel:N}}),[m,f,H,N])),l.createElement(g,(0,a.Z)({toc:x,className:o,linkClassName:m},L))}}}]);
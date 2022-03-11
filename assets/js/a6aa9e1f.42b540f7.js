"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[3089],{36299:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(67294),o=n(95999),a=n(71750);function r(e){var t=e.metadata,n=t.previousPage,r=t.nextPage;return i.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},i.createElement("div",{className:"pagination-nav__item"},n&&i.createElement(a.Z,{permalink:n,title:i.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),i.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&i.createElement(a.Z,{permalink:r,title:i.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},17582:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var i,o=n(67294),a=n(52263),r=n(22685),s=n(36299),l=n(42773),c=n(35742),d=n(19470),m=n.n(d),p=["title","titleId"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f,v=function(e){var t=e.title,n=e.titleId,a=h(e,p);return o.createElement("svg",u({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,i||(i=o.createElement("path",{d:"M3 4h4v4H3V4Zm6 1v2h12V5H9Zm-6 5h4v4H3v-4Zm6 1v2h12v-2H9Zm-6 5h4v4H3v-4Zm6 1v2h12v-2H9Z"})))},g=["title","titleId"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},b.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=function(e){var t=e.title,n=e.titleId,i=y(e,g);return o.createElement("svg",b({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},i),t?o.createElement("title",{id:n},t):null,f||(f=o.createElement("path",{d:"M16 20h4v-4h-4v4Zm0-6h4v-4h-4v4Zm-6-6h4V4h-4v4Zm6 0h4V4h-4v4Zm-6 6h4v-4h-4v4Zm-6 0h4v-4H4v4Zm0 6h4v-4H4v4Zm6 0h4v-4h-4v4ZM4 8h4V4H4v4Z"})))},E=n(39960);function O(e){var t=e.metadata,n=e.items,i=(e.sidebar,(0,a.Z)().siteConfig.title),d=(t.blogDescription,t.blogTitle),p="/"===t.permalink?i:d,u=t.page>1,h=function(){var e=(0,o.useState)("card"),t=e[0],n=e[1];return(0,o.useEffect)((function(){n(localStorage.getItem("viewType")||"card")}),[]),{viewType:t,toggleViewType:(0,o.useCallback)((function(e){n(e),localStorage.setItem("viewType",e)}),[])}}(),f=h.viewType,g=h.toggleViewType,b="card"===f,y="list"===f;return o.createElement(l.Z,{title:p,wrapperClassName:"blog-list__page"},o.createElement(c.Z,null,o.createElement("title",null,"\u90e8\u843d\u683c | OUCH1978@GITHUB")),o.createElement("div",{className:"container-wrapper"},o.createElement("div",{className:"container padding-vert--sm"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col col--12"},!u,o.createElement("div",{className:"bloghome__swith-view"},o.createElement(w,{onClick:function(){return g("card")},className:"card"===f?"bloghome__switch--selected":"bloghome__switch"}),o.createElement(v,{onClick:function(){return g("list")},className:"list"===f?"bloghome__switch--selected":"bloghome__switch"})),o.createElement("div",{className:"bloghome__posts"},b&&o.createElement("div",{className:"bloghome__posts-card"},n.map((function(e,t){var n=e.content;return o.createElement(m(),{key:n.metadata.permalink},o.createElement(o.Fragment,{key:n.metadata.permalink},o.createElement(r.Z,{key:n.metadata.permalink,frontMatter:n.frontMatter,assets:n.assets,metadata:n.metadata,truncated:n.metadata.truncated},o.createElement(n,null))))}))),y&&o.createElement("div",{className:"bloghome__posts-list"},n.map((function(e,t){var n=e.content,i=n.metadata,a=n.frontMatter.title,r=i.permalink,s=i.date,l=i.tags,c=new Date(s),d=c.getFullYear(),m=("0"+(c.getMonth()+1)).slice(-2),p=("0"+c.getDate()).slice(-2);return o.createElement(o.Fragment,{key:i.permalink},o.createElement("div",{className:"post__list-item",key:i.permalink},o.createElement(E.Z,{to:r,className:"post__list-title"},a),o.createElement("div",{className:"post__list-tags"},l.length>0&&l.slice(0,2).map((function(e,t){var n=e.label,i=e.permalink;return o.createElement(E.Z,{key:i,className:"post__tags "+(t<l.length?"margin-right--sm":""),to:i,style:{fontSize:"0.75em",fontWeight:500}},n)}))),o.createElement("div",{className:"post__list-date"},d,"-",m,"-",p)))}))),o.createElement(s.Z,{metadata:t})))))))}},22685:function(e,t,n){n.d(t,{Z:function(){return N}});var i,o,a,r,s,l=n(67294),c=n(3905),d=n(35742),m=n(39960),p=n(27440),u=n(44996),h=n(52263),f=n(86753),v=n(76637),g=n(95999),b=n(59553),y="blogPostTitle_uMeh",w=n(37446),E=n(87379),O=(0,E.iv)(i||(i=(0,w.Z)(["\n  h2 {\n    /* font-size: 1.6em; */\n\n    /* border-bottom: 2px solid var(--ifm-link-color); */\n    /* padding-top: 0.4em;\n    padding-bottom: 0.3em; */\n  }\n\n  h3 {\n    /* font-size: 1em; */\n    /* color: var(--ifm-link-color); */\n  }\n\n  /* h2,\n  h3 {\n    color: var(--post-title-color);\n  } */\n\n  p,\n  li,\n  a {\n    /* font-size: 1em; */\n    /* font-size: 18px; */\n    /* text-align: justify; */\n    /* letter-spacing: 0.04em; */\n  }\n\n  p,\n  li {\n    /* color: var(--text-color); */\n  }\n"]))),_=E.ZP.section(o||(o=(0,w.Z)(["\n  ",";\n  ","\n"])),(function(e){return e.isDark?"\n":O}),(function(e){return e.isBlogPostPage?"":(0,E.iv)(a||(a=(0,w.Z)(["\n/* img {\n  width: 100%;\n  height: 40%;\n  max-width: 100%;\n  max-height: 400px;\n  object-fit: cover;\n  object-position: top;\n} */\n"])))})),k=E.ZP.div(r||(r=(0,w.Z)(["\n  margin-top: 0em;\n  margin-bottom: 1.5em;\n\n  ","\n\n  @media (max-width: 570px) {\n    .article__details {\n      padding: 0;\n    }\n  }\n\n  article {\n    .single-post--date {\n      color: var(--ifm-color-primary);\n      font-size: 0.9em;\n    }\n\n    > header {\n      > h1 {\n        font-size: 2em;\n        /* color: #2f5c85; */\n        @media (max-width: 570px) {\n          & {\n            font-size: 1.6em;\n            text-align: center;\n          }\n        }\n      }\n\n      > h2 {\n        font-size: 2em;\n        /* line-height: 1.5em; */\n        margin-bottom: 10px !important;\n        a {\n          color: var(--ifm-heading-color);\n          &:hover {\n            text-decoration: none;\n          }\n        }\n        @media (max-width: 570px) {\n          & {\n            font-size: 1.7em;\n          }\n        }\n      }\n\n      > div > time {\n        color: var(--post-pub-date-color);\n      }\n    }\n\n    .markdown p,\n    .markdown ul {\n      font-family: var(--content-font-family);\n    }\n\n    > section {\n      /*pre {\n        > code {\n          padding: 1.8rem 1rem 1rem 1rem;\n        }\n      }\n\n       pre:before {\n        content: '';\n        position: absolute;\n        top: 9px;\n        left: 15px;\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        background: #fc625d;\n        box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;\n        z-index: 1;\n      } */\n    }\n  }\n\n  /* \u5361\u7247\u65b0\u62df\u6001\u7279\u6548 */\n  .blog-list--item {\n    background: var(--blog-item-background-color);\n    box-shadow: var(--blog-item-shadow);\n    padding: 1em 1em;\n\n    position: relative;\n  }\n\n  @media (max-width: 1000px) {\n    .blog-list--item {\n      padding-right: 1em;\n    }\n  }\n\n  .testt {\n    position: absolute;\n    font-size: 12vw;\n    color: #c8a3ff;\n  }\n\n  /* @media (max-width: 570px) {\n    box-shadow: none;\n    padding: 0;\n  } */\n"])),(function(e){return e.isBlogPostPage&&(0,E.iv)(s||(s=(0,w.Z)(["\n$ {\n  '' /* box-shadow: var(--post-shadow); */\n}\nborder - radius: var (--ifm - pagination - nav - border - radius);\n$ {\n  '' /* padding: 2em 2em; */\n}\nmargin - top: 0;\nmargin - bottom: -2 em;\n"])))})),x=n(92814),T=n(51436);function N(e){var t,n=(t=(0,b.c2)().selectMessage,function(e){var n=Math.ceil(e);return t(n,(0,g.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}),i=e.children,o=e.frontMatter,a=e.assets,r=e.metadata,s=e.truncated,w=e.isBlogPostPage,E=void 0!==w&&w,O=(e.views,r.date),N=r.formattedDate,R=r.permalink,P=r.tags,S=r.readingTime,Z=r.title,M=r.editUrl,j=r.authors,H=(o.slug,o.image),C=(0,u.Z)(H,{absolute:!0}),I=(0,b.If)().isDarkTheme,L=(0,h.Z)().i18n.currentLocale,z=new Date(O),D=z.getFullYear(),A=z.getMonth()+1,F=z.getDate(),V=D+" \u5e74 "+A+" \u6708";"en"===L&&(V=" "+D+" - "+(A=z.toLocaleString("default",{month:"long"})));var q,B=function(){return(P.length>0||s)&&l.createElement("div",{className:"post__tags-container margin-bottom--md"},P.length>0&&l.createElement(l.Fragment,null,l.createElement(x.G,{icon:T.tho,className:"margin-right--md"}),P.slice(0,4).map((function(e,t){var n=e.label,i=e.permalink;return l.createElement(m.Z,{key:i,className:"post__tags "+(t>0?"margin-horiz--sm":"margin-right--sm"),to:i,style:{fontSize:"0.75em",fontWeight:500}},n)}))))};return l.createElement(k,{isDark:I,isBlogPostPage:E},l.createElement(d.Z,null,H&&l.createElement("meta",{property:"og:image",content:C}),H&&l.createElement("meta",{property:"twitter:image",content:C}),H&&l.createElement("meta",{name:"twitter:image:alt",content:"Image for "+Z})),l.createElement("div",{className:"row "+(E?"":"blog-list--item"),style:{margin:"0px"}},!E&&l.createElement("div",{className:"post__date-container col col--3 padding-right--lg margin-bottom--lg"},l.createElement("div",{className:"post__date"},l.createElement("div",{className:"post__year_month"},V),l.createElement("div",{className:"post__day"},F)),l.createElement("div",{className:"line__decor"})),l.createElement("div",{className:"col "+(E?"col--12 article__details":"col--9")},l.createElement("article",{className:E?void 0:"margin-bottom--md"},(q=E?"h1":"h2",l.createElement("header",null,l.createElement(q,{className:y,itemProp:"headline"},E?Z:l.createElement(m.Z,{itemProp:"url",to:R},Z)),l.createElement(v.Z,{authors:j,assets:a}))),!E&&l.createElement("p",{className:"reading-time"},l.createElement(x.G,{icon:T.SZw,className:"margin-right--md"}),void 0!==S&&l.createElement(l.Fragment,null,n(S))),!E&&B(),E&&l.createElement("p",{className:"single-post--date text--center"},l.createElement(x.G,{icon:T.a1i,className:"margin-right--md"}),l.createElement("time",{dateTime:O,itemProp:"datePublished"},N),l.createElement("br",null),l.createElement("br",null),l.createElement(x.G,{icon:T.SZw,className:"margin-right--md"}),void 0!==S&&l.createElement(l.Fragment,null,n(S))),E&&l.createElement(l.Fragment,null,l.createElement("div",{className:"text--center margin-bottom--xs padding-bottom--xs"},B())),l.createElement(_,{isBlogPostPage:E,isDark:I,className:"markdown"},l.createElement(c.Zo,{components:p.Z},i))),l.createElement("footer",{className:"article__footer padding-top--md margin-top--lg margin-bottom--lg"},!E&&l.createElement("span",{className:"footer__read_count"}),E&&M&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(f.Z,{editUrl:M})),s&&l.createElement(m.Z,{to:r.permalink,"aria-label":(0,g.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:Z})},l.createElement("b",null,l.createElement(g.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},19470:function(e,t,n){function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){var n=t.distance,i=t.left,o=t.right,a=t.up,r=t.down,s=t.top,c=t.bottom,d=t.big,m=t.mirror,u=t.opposite,h=(n?n.toString():0)+((i?1:0)|(o?2:0)|(s||r?4:0)|(c||a?8:0)|(m?16:0)|(u?32:0)|(e?64:0)|(d?128:0));if(p.hasOwnProperty(h))return p[h];var f=i||o||a||r||s||c,v=void 0,g=void 0;if(f){if(!m!=!(e&&u)){var b=[o,i,c,s,r,a];i=b[0],o=b[1],s=b[2],c=b[3],a=b[4],r=b[5]}var y=n||(d?"2000px":"100%");v=i?"-"+y:o?y:"0",g=r||s?"-"+y:a||c?y:"0"}return p[h]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+v+", "+g+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),p[h]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,a=(e.out,e.forever),r=e.timeout,s=e.duration,c=void 0===s?l.defaults.duration:s,m=e.delay,p=void 0===m?l.defaults.delay:m,u=e.count,h=void 0===u?l.defaults.count:u,f=i(e,["children","out","forever","timeout","duration","delay","count"]),v={make:o,duration:void 0===r?c:r,delay:p,forever:a,count:h,style:{animationFillMode:"both"},reverse:f.left};return t?(0,d.default)(f,v,v,n):v}Object.defineProperty(t,"__esModule",{value:!0});var r,s=n(45697),l=n(11017),c=n(42580),d=(r=c)&&r.__esModule?r:{default:r},m={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},p={};a.propTypes=m,t.default=a,e.exports=t.default},25792:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(67294),c=(i=l)&&i.__esModule?i:{default:i},d=n(45697),m=n(11017),p=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),u={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:p.isRequired,outEffect:(0,d.oneOfType)([p,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},h={transitionGroup:d.object},f=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,m.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!m.observerMode&&this.props.collapse&&window.document.dispatchEvent(m.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,o=n.forever,a=n.count,r=n.delay,s=n.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))}),r+(s+(t?s:0)*a))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),o=this.isOn?this.getDimensionValue():0,a=void 0,r=void 0;if(t.collapseOnly)a=n.duration/3,r=n.delay;else{var s=i>>2,l=s>>1;a=s,r=n.delay+(this.isOn?0:i-s-l),e.style.animationDuration=i-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:o,transition:"height "+a+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(o,e,n):o),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),m.ssr&&(0,m.disableSsr)()}},{key:"handleObserve",value:function(e,t){a(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&m.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m.globalHide||(0,m.hideAll)(),this&&this.el&&(e||(e=this.props),m.ssr&&(0,m.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):m.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||m.ssr&&!m.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):m.ssr&&(m.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],a=i.duration,s=i.reverse,l=n.length,d=2*a;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),a=d/2);var p=s?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?c.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,m.cascade)(s?p--:p++,0,l,a,d))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,o=i.style,a=i.className,s=i.children,l=this.props.disabled?a:(this.props.outEffect?m.namespace:"")+(this.state.className?" "+this.state.className:"")+(a?" "+a:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),d=r({},o,{opacity:1})):d=this.props.disabled?o:r({},o,this.state.style);var p=r({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:d},this.props.refProp,this.saveRef)),u=c.default.cloneElement(t,p,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:u}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:u}):u}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,m.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),o=Math.min(n,window.innerHeight)*(m.globalHide?e.fraction:0);return i>o-window.innerHeight&&i<n-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){m.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!m.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);f.propTypes=u,f.defaultProps={fraction:.2,refProp:"ref"},f.contextTypes=h,f.displayName="RevealBase",t.default=f,e.exports=t.default},11017:function(e,t){function n(e){try{return u.insertRule(e,u.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function i(){c||(t.globalHide=c=!0,window.removeEventListener("scroll",i,!0),n("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",i,!0),window.document.removeEventListener("visibilitychange",i))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,n,i,o){var a=Math.log(i),r=(Math.log(o)-a)/(n-t);return Math.exp(a+r*(e-t))},t.animation=function(e){if(!u)return"";var t="@keyframes "+(h+m)+"{"+e+"}",n=p[e];return n?""+h+n:(u.insertRule(t,u.cssRules.length),p[e]=m,""+h+m++)},t.hideAll=i,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var o=t.namespace="react-reveal",a=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,s=t.raf=function(e){return window.setTimeout(e,66)},l=t.disableSsr=function(){return t.ssr=a=!1},c=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),m=1,p={},u=!1,h=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||s,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(l,1500),r||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var f=document.createElement("style");document.head.appendChild(f),f.sheet&&f.sheet.cssRules&&f.sheet.insertRule&&(u=f.sheet,window.addEventListener("scroll",i,!0),window.addEventListener("orientationchange",i,!0),window.document.addEventListener("visibilitychange",i))}},42580:function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),a.default.Children.count(i)<2?a.default.createElement(r.default,o({},e,{inEffect:t,outEffect:n,children:i})):(i=a.default.Children.map(i,(function(i){return a.default.createElement(r.default,o({},e,{inEffect:t,outEffect:n,children:i}))})),"Fragment"in a.default?a.default.createElement(a.default.Fragment,null,i):a.default.createElement("span",null,i))};var a=i(n(67294)),r=i(n(25792));e.exports=t.default}}]);
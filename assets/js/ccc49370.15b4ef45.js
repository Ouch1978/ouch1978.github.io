"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[6103],{39058:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(80102),r=n(67294),o=n(86010),i=n(93659),l=n(87524),m=n(39960),s=n(95999),c="sidebar_re4s",d="sidebarItemTitle_pO2u",g="sidebarItemList_Yudw",p="sidebarItem__DBe",u="sidebarItemLink_mo7H",b="sidebarItemLinkActive_I1ZP";function h(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,o.Z)(c,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,o.Z)(d,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,o.Z)(g,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:p},r.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:b},e.title))})))))}var f=n(13102);function v(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function E(e){return r.createElement(f.Zo,{component:v,props:e})}function _(e){var t=e.sidebar,n=(0,l.i)();return null!=t&&t.items.length?"mobile"===n?r.createElement(E,{sidebar:t}):r.createElement(h,{sidebar:t}):null}var x=["sidebar","toc","children"];function N(e){var t=e.sidebar,n=e.toc,l=e.children,m=(0,a.Z)(e,x),s=t&&t.items.length>0;return r.createElement(i.Z,m,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(_,{sidebar:t}),r.createElement("main",{className:(0,o.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},l),n&&r.createElement("div",{className:"col col--2"},n))))}},22685:function(e,t,n){n.d(t,{Z:function(){return I}});var a,r,o,i,l,m=n(67294),s=n(3905),c=n(35742),d=n(39960),g=n(35058),p=n(44996),u=n(52263),b=n(66114),h=n(52719),f=n(95999),v=n(88824),E=n(92949),_="blogPostTitle_uMeh",x=n(37446),N=n(32125),Z=(0,N.iv)(a||(a=(0,x.Z)(["\n  h2 {\n    /* font-size: 1.6em; */\n\n    /* border-bottom: 2px solid var(--ifm-link-color); */\n    /* padding-top: 0.4em;\n    padding-bottom: 0.3em; */\n  }\n\n  h3 {\n    /* font-size: 1em; */\n    /* color: var(--ifm-link-color); */\n  }\n\n  /* h2,\n  h3 {\n    color: var(--post-title-color);\n  } */\n\n  p,\n  li,\n  a {\n    /* font-size: 1em; */\n    /* font-size: 18px; */\n    /* text-align: justify; */\n    /* letter-spacing: 0.04em; */\n  }\n\n  p,\n  li {\n    /* color: var(--text-color); */\n  }\n"]))),w=N.ZP.section(r||(r=(0,x.Z)(["\n  ",";\n  ","\n"])),(function(e){return e.isDark?"\n":Z}),(function(e){return e.isBlogPostPage?"":(0,N.iv)(o||(o=(0,x.Z)(["\n/* img {\n  width: 100%;\n  height: 40%;\n  max-width: 100%;\n  max-height: 400px;\n  object-fit: cover;\n  object-position: top;\n} */\n"])))})),k=N.ZP.div(i||(i=(0,x.Z)(["\n  margin-top: 0em;\n  margin-bottom: 1.5em;\n\n  ","\n\n  @media (max-width: 570px) {\n    .article__details {\n      padding: 0;\n    }\n  }\n\n  article {\n    .single-post--date {\n      color: var(--ifm-color-primary);\n      font-size: 0.9em;\n    }\n\n    > header {\n      > h1 {\n        font-size: 2em;\n        /* color: #2f5c85; */\n        @media (max-width: 570px) {\n          & {\n            font-size: 1.6em;\n            text-align: center;\n          }\n        }\n      }\n\n      > h2 {\n        font-size: 2em;\n        /* line-height: 1.5em; */\n        margin-bottom: 10px !important;\n        a {\n          color: var(--ifm-heading-color);\n          &:hover {\n            text-decoration: none;\n          }\n        }\n        @media (max-width: 570px) {\n          & {\n            font-size: 1.7em;\n          }\n        }\n      }\n\n      > div > time {\n        color: var(--post-pub-date-color);\n      }\n    }\n\n    .markdown p,\n    .markdown ul {\n      font-family: var(--content-font-family);\n    }\n\n    > section {\n      /*pre {\n        > code {\n          padding: 1.8rem 1rem 1rem 1rem;\n        }\n      }\n\n       pre:before {\n        content: '';\n        position: absolute;\n        top: 9px;\n        left: 15px;\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        background: #fc625d;\n        box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;\n        z-index: 1;\n      } */\n    }\n  }\n\n  /* \u5361\u7247\u65b0\u62df\u6001\u7279\u6548 */\n  .blog-list--item {\n    background: var(--blog-item-background-color);\n    box-shadow: var(--blog-item-shadow);\n    padding: 1em 1em;\n\n    position: relative;\n  }\n\n  @media (max-width: 1000px) {\n    .blog-list--item {\n      padding-right: 1em;\n    }\n  }\n\n  .testt {\n    position: absolute;\n    font-size: 12vw;\n    color: #c8a3ff;\n  }\n\n  /* @media (max-width: 570px) {\n    box-shadow: none;\n    padding: 0;\n  } */\n"])),(function(e){return e.isBlogPostPage&&(0,N.iv)(l||(l=(0,x.Z)(["\n$ {\n  '' /* box-shadow: var(--post-shadow); */\n}\nborder - radius: var (--ifm - pagination - nav - border - radius);\n$ {\n  '' /* padding: 2em 2em; */\n}\nmargin - top: 0;\nmargin - bottom: -2 em;\n"])))})),P=n(92814),y=n(51436);function I(e){var t,n=(t=(0,v.c)().selectMessage,function(e){var n=Math.ceil(e);return t(n,(0,f.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}),a=e.children,r=e.frontMatter,o=e.assets,i=e.metadata,l=e.truncated,x=e.isBlogPostPage,N=void 0!==x&&x,Z=(e.views,i.date),I=i.formattedDate,T=i.permalink,z=i.tags,L=i.readingTime,B=i.title,M=i.editUrl,A=i.authors,D=(r.slug,r.image),F=(0,p.Z)(D,{absolute:!0}),j=(0,E.I)().isDarkTheme,G=(0,u.Z)().i18n.currentLocale,R=new Date(Z),S=R.getFullYear(),C=R.getMonth()+1,H=R.getDate(),O=S+" \u5e74 "+C+" \u6708";"en"===G&&(O=" "+S+" - "+(C=R.toLocaleString("default",{month:"long"})));var U,W=function(){return(z.length>0||l)&&m.createElement("div",{className:"post__tags-container margin-bottom--md"},z.length>0&&m.createElement(m.Fragment,null,m.createElement(P.G,{icon:y.tho,className:"margin-right--md"}),z.slice(0,4).map((function(e,t){var n=e.label,a=e.permalink;return m.createElement(d.Z,{key:a,className:"post__tags "+(t>0?"margin-horiz--sm":"margin-right--sm"),to:a,style:{fontSize:"0.75em",fontWeight:500}},n)}))))};return m.createElement(k,{isDark:j,isBlogPostPage:N},m.createElement(c.Z,null,D&&m.createElement("meta",{property:"og:image",content:F}),D&&m.createElement("meta",{property:"twitter:image",content:F}),D&&m.createElement("meta",{name:"twitter:image:alt",content:"Image for "+B})),m.createElement("div",{className:"row "+(N?"":"blog-list--item"),style:{margin:"0px"}},!N&&m.createElement("div",{className:"post__date-container col col--3 padding-right--lg margin-bottom--lg"},m.createElement("div",{className:"post__date"},m.createElement("div",{className:"post__year_month"},O),m.createElement("div",{className:"post__day"},H)),m.createElement("div",{className:"line__decor"})),m.createElement("div",{className:"col "+(N?"col--12 article__details":"col--9")},m.createElement("article",{className:N?void 0:"margin-bottom--md"},(U=N?"h1":"h2",m.createElement("header",null,m.createElement(U,{className:_,itemProp:"headline"},N?B:m.createElement(d.Z,{itemProp:"url",to:T},B)),m.createElement(h.Z,{authors:A,assets:o}))),!N&&m.createElement("p",{className:"reading-time"},m.createElement(P.G,{icon:y.SZw,className:"margin-right--md"}),void 0!==L&&m.createElement(m.Fragment,null,n(L))),!N&&W(),N&&m.createElement("p",{className:"single-post--date text--center"},m.createElement(P.G,{icon:y.a1i,className:"margin-right--md"}),m.createElement("time",{dateTime:Z,itemProp:"datePublished"},I),m.createElement("br",null),m.createElement("br",null),m.createElement(P.G,{icon:y.SZw,className:"margin-right--md"}),void 0!==L&&m.createElement(m.Fragment,null,n(L))),N&&m.createElement(m.Fragment,null,m.createElement("div",{className:"text--center margin-bottom--xs padding-bottom--xs"},W())),m.createElement(w,{isBlogPostPage:N,isDark:j,className:"markdown"},m.createElement(s.Zo,{components:g.Z},a))),m.createElement("footer",{className:"article__footer padding-top--md margin-top--lg margin-bottom--lg"},!N&&m.createElement("span",{className:"footer__read_count"}),N&&M&&m.createElement("div",{className:"col margin-top--sm"},m.createElement(b.Z,{editUrl:M})),l&&m.createElement(d.Z,{to:i.permalink,"aria-label":(0,f.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:B})},m.createElement("b",null,m.createElement(f.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},80789:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(67294),r=n(39058),o=n(22685),i=n(83117),l=n(95999),m=n(32244);function s(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(m.Z,(0,i.Z)({},n,{subLabel:a.createElement(l.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(m.Z,(0,i.Z)({},t,{subLabel:a.createElement(l.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var c=n(10833),d=n(35281),g=n(39407),p=n(86010),u=n(53944);function b(e){var t,n=e.content,r=n.assets,o=n.metadata,i=o.title,l=o.description,m=o.date,s=o.tags,d=o.authors,g=o.frontMatter,p=g.keywords,u=null!=(t=r.image)?t:g.image;return a.createElement(c.d,{title:i,description:l,keywords:p,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:m}),d.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((function(e){return e.label})).join(",")}))}function h(e){var t=e.content,n=e.sidebar,i=t.assets,l=t.metadata,m=l.nextItem,c=l.prevItem,d=l.frontMatter,p=d.hide_table_of_contents,b=d.toc_min_heading_level,h=d.toc_max_heading_level,f=d.slug,v=d.title,E=d.no_comments;return a.createElement(r.Z,{sidebar:n,toc:!p&&t.toc&&t.toc.length>0?a.createElement(g.Z,{toc:t.toc,minHeadingLevel:b,maxHeadingLevel:h}):void 0},a.createElement(o.Z,{frontMatter:d,assets:i,metadata:l,isBlogPostPage:!0},a.createElement(t,null)),!E&&a.createElement(u.qw,{shortname:"ouch1978",config:{identifier:f,title:v,language:"zh-TW"}}),(m||c)&&a.createElement(s,{nextItem:m,prevItem:c}))}function f(e){return a.createElement(c.FG,{className:(0,p.Z)(d.k.wrapper.blogPages,d.k.page.blogPostPage)},a.createElement(b,e),a.createElement(h,e))}}}]);
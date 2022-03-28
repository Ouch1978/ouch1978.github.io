"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[8610],{78665:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(63366),r=n(67294),i=n(86010),l=n(32600),o=n(39960),m="sidebar_a9qW",s="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",d="sidebarItem_CF0Q",g="sidebarItemLink_miNk",p="sidebarItemLinkActive_RRTD",u=n(95999);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,i.Z)(m,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,i.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title))}))))}var b=["sidebar","toc","children"];function f(e){var t=e.sidebar,n=e.toc,o=e.children,m=(0,a.Z)(e,b),s=t&&t.items.length>0;return r.createElement(l.Z,m,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,i.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&r.createElement("div",{className:"col col--2"},n))))}},36299:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(95999),i=n(71750);function l(e){var t=e.metadata,n=t.previousPage,l=t.nextPage;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a.createElement("div",{className:"pagination-nav__item"},n&&a.createElement(i.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&a.createElement(i.Z,{permalink:l,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},69404:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(67294),r=n(39960),i=n(78665),l=n(22685),o=n(95999),m=n(5979),s=n(36299),c=n(14739),d=n(86010);function g(e){var t,n=e.metadata,g=e.items,p=e.sidebar,u=e.listMetadata,h=n.allTagsPath,b=n.name,f=n.count,v=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:v(f),tagName:b});return a.createElement(m.FG,{className:(0,d.Z)(m.kM.wrapper.blogPages,m.kM.page.blogTagPostListPage)},a.createElement(m.d,{title:E}),a.createElement(c.Z,{tag:"blog_tags_posts"}),a.createElement(i.Z,{sidebar:p},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,E),a.createElement(r.Z,{href:h},a.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),g.map((function(e){var t=e.content;return a.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},a.createElement(t,null))})),a.createElement(s.Z,{metadata:u})))}},22685:function(e,t,n){n.d(t,{Z:function(){return T}});var a,r,i,l,o,m=n(67294),s=n(3905),c=n(35742),d=n(39960),g=n(63384),p=n(44996),u=n(52263),h=n(86753),b=n(76637),f=n(95999),v=n(5979),E="blogPostTitle_uMeh",_=n(81880),x=n(32125),N=(0,x.iv)(a||(a=(0,_.Z)(["\n  h2 {\n    /* font-size: 1.6em; */\n\n    /* border-bottom: 2px solid var(--ifm-link-color); */\n    /* padding-top: 0.4em;\n    padding-bottom: 0.3em; */\n  }\n\n  h3 {\n    /* font-size: 1em; */\n    /* color: var(--ifm-link-color); */\n  }\n\n  /* h2,\n  h3 {\n    color: var(--post-title-color);\n  } */\n\n  p,\n  li,\n  a {\n    /* font-size: 1em; */\n    /* font-size: 18px; */\n    /* text-align: justify; */\n    /* letter-spacing: 0.04em; */\n  }\n\n  p,\n  li {\n    /* color: var(--text-color); */\n  }\n"]))),w=x.ZP.section(r||(r=(0,_.Z)(["\n  ",";\n  ","\n"])),(function(e){return e.isDark?"\n":N}),(function(e){return e.isBlogPostPage?"":(0,x.iv)(i||(i=(0,_.Z)(["\n/* img {\n  width: 100%;\n  height: 40%;\n  max-width: 100%;\n  max-height: 400px;\n  object-fit: cover;\n  object-position: top;\n} */\n"])))})),Z=x.ZP.div(l||(l=(0,_.Z)(["\n  margin-top: 0em;\n  margin-bottom: 1.5em;\n\n  ","\n\n  @media (max-width: 570px) {\n    .article__details {\n      padding: 0;\n    }\n  }\n\n  article {\n    .single-post--date {\n      color: var(--ifm-color-primary);\n      font-size: 0.9em;\n    }\n\n    > header {\n      > h1 {\n        font-size: 2em;\n        /* color: #2f5c85; */\n        @media (max-width: 570px) {\n          & {\n            font-size: 1.6em;\n            text-align: center;\n          }\n        }\n      }\n\n      > h2 {\n        font-size: 2em;\n        /* line-height: 1.5em; */\n        margin-bottom: 10px !important;\n        a {\n          color: var(--ifm-heading-color);\n          &:hover {\n            text-decoration: none;\n          }\n        }\n        @media (max-width: 570px) {\n          & {\n            font-size: 1.7em;\n          }\n        }\n      }\n\n      > div > time {\n        color: var(--post-pub-date-color);\n      }\n    }\n\n    .markdown p,\n    .markdown ul {\n      font-family: var(--content-font-family);\n    }\n\n    > section {\n      /*pre {\n        > code {\n          padding: 1.8rem 1rem 1rem 1rem;\n        }\n      }\n\n       pre:before {\n        content: '';\n        position: absolute;\n        top: 9px;\n        left: 15px;\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        background: #fc625d;\n        box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;\n        z-index: 1;\n      } */\n    }\n  }\n\n  /* \u5361\u7247\u65b0\u62df\u6001\u7279\u6548 */\n  .blog-list--item {\n    background: var(--blog-item-background-color);\n    box-shadow: var(--blog-item-shadow);\n    padding: 1em 1em;\n\n    position: relative;\n  }\n\n  @media (max-width: 1000px) {\n    .blog-list--item {\n      padding-right: 1em;\n    }\n  }\n\n  .testt {\n    position: absolute;\n    font-size: 12vw;\n    color: #c8a3ff;\n  }\n\n  /* @media (max-width: 570px) {\n    box-shadow: none;\n    padding: 0;\n  } */\n"])),(function(e){return e.isBlogPostPage&&(0,x.iv)(o||(o=(0,_.Z)(["\n$ {\n  '' /* box-shadow: var(--post-shadow); */\n}\nborder - radius: var (--ifm - pagination - nav - border - radius);\n$ {\n  '' /* padding: 2em 2em; */\n}\nmargin - top: 0;\nmargin - bottom: -2 em;\n"])))})),k=n(92814),P=n(51436);function T(e){var t,n=(t=(0,v.c2)().selectMessage,function(e){var n=Math.ceil(e);return t(n,(0,f.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}),a=e.children,r=e.frontMatter,i=e.assets,l=e.metadata,o=e.truncated,_=e.isBlogPostPage,x=void 0!==_&&_,N=(e.views,l.date),T=l.formattedDate,y=l.permalink,I=l.tags,z=l.readingTime,M=l.title,L=l.editUrl,A=l.authors,B=(r.slug,r.image),D=(0,p.Z)(B,{absolute:!0}),F=(0,v.If)().isDarkTheme,R=(0,u.Z)().i18n.currentLocale,G=new Date(N),S=G.getFullYear(),C=G.getMonth()+1,U=G.getDate(),j=S+" \u5e74 "+C+" \u6708";"en"===R&&(j=" "+S+" - "+(C=G.toLocaleString("default",{month:"long"})));var O,K=function(){return(I.length>0||o)&&m.createElement("div",{className:"post__tags-container margin-bottom--md"},I.length>0&&m.createElement(m.Fragment,null,m.createElement(k.G,{icon:P.tho,className:"margin-right--md"}),I.slice(0,4).map((function(e,t){var n=e.label,a=e.permalink;return m.createElement(d.Z,{key:a,className:"post__tags "+(t>0?"margin-horiz--sm":"margin-right--sm"),to:a,style:{fontSize:"0.75em",fontWeight:500}},n)}))))};return m.createElement(Z,{isDark:F,isBlogPostPage:x},m.createElement(c.Z,null,B&&m.createElement("meta",{property:"og:image",content:D}),B&&m.createElement("meta",{property:"twitter:image",content:D}),B&&m.createElement("meta",{name:"twitter:image:alt",content:"Image for "+M})),m.createElement("div",{className:"row "+(x?"":"blog-list--item"),style:{margin:"0px"}},!x&&m.createElement("div",{className:"post__date-container col col--3 padding-right--lg margin-bottom--lg"},m.createElement("div",{className:"post__date"},m.createElement("div",{className:"post__year_month"},j),m.createElement("div",{className:"post__day"},U)),m.createElement("div",{className:"line__decor"})),m.createElement("div",{className:"col "+(x?"col--12 article__details":"col--9")},m.createElement("article",{className:x?void 0:"margin-bottom--md"},(O=x?"h1":"h2",m.createElement("header",null,m.createElement(O,{className:E,itemProp:"headline"},x?M:m.createElement(d.Z,{itemProp:"url",to:y},M)),m.createElement(b.Z,{authors:A,assets:i}))),!x&&m.createElement("p",{className:"reading-time"},m.createElement(k.G,{icon:P.SZw,className:"margin-right--md"}),void 0!==z&&m.createElement(m.Fragment,null,n(z))),!x&&K(),x&&m.createElement("p",{className:"single-post--date text--center"},m.createElement(k.G,{icon:P.a1i,className:"margin-right--md"}),m.createElement("time",{dateTime:N,itemProp:"datePublished"},T),m.createElement("br",null),m.createElement("br",null),m.createElement(k.G,{icon:P.SZw,className:"margin-right--md"}),void 0!==z&&m.createElement(m.Fragment,null,n(z))),x&&m.createElement(m.Fragment,null,m.createElement("div",{className:"text--center margin-bottom--xs padding-bottom--xs"},K())),m.createElement(w,{isBlogPostPage:x,isDark:F,className:"markdown"},m.createElement(s.Zo,{components:g.Z},a))),m.createElement("footer",{className:"article__footer padding-top--md margin-top--lg margin-bottom--lg"},!x&&m.createElement("span",{className:"footer__read_count"}),x&&L&&m.createElement("div",{className:"col margin-top--sm"},m.createElement(h.Z,{editUrl:L})),o&&m.createElement(d.Z,{to:l.permalink,"aria-label":(0,f.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:M})},m.createElement("b",null,m.createElement(f.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);
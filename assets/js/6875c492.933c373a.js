"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[8610],{39058:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(80102),r=n(67294),l=n(86010),i=n(93659),o=n(87524),m=n(39960),s=n(95999),c="sidebar_re4s",d="sidebarItemTitle_pO2u",g="sidebarItemList_Yudw",p="sidebarItem__DBe",u="sidebarItemLink_mo7H",h="sidebarItemLinkActive_I1ZP";function b(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(d,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(g,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:p},r.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:h},e.title))})))))}var f=n(13102);function E(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function v(e){return r.createElement(f.Zo,{component:E,props:e})}function _(e){var t=e.sidebar,n=(0,o.i)();return null!=t&&t.items.length?"mobile"===n?r.createElement(v,{sidebar:t}):r.createElement(b,{sidebar:t}):null}var N=["sidebar","toc","children"];function x(e){var t=e.sidebar,n=e.toc,o=e.children,m=(0,a.Z)(e,N),s=t&&t.items.length>0;return r.createElement(i.Z,m,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(_,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&r.createElement("div",{className:"col col--2"},n))))}},99703:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(95999),l=n(32244);function i(e){var t=e.metadata,n=t.previousPage,i=t.nextPage;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(l.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&a.createElement(l.Z,{permalink:i,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},41714:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(67294),r=n(86010),l=n(95999),i=n(88824),o=n(10833),m=n(35281),s=n(39960),c=n(39058),d=n(22685),g=n(99703),p=n(90197);function u(e){var t,n=e.tag,u=e.items,h=e.sidebar,b=e.listMetadata,f=(t=(0,i.c)().selectMessage,function(e){return t(e,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(n.count),tagName:n.label});return a.createElement(o.FG,{className:(0,r.Z)(m.k.wrapper.blogPages,m.k.page.blogTagPostListPage)},a.createElement(o.d,{title:E}),a.createElement(p.Z,{tag:"blog_tags_posts"}),a.createElement(c.Z,{sidebar:h},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,E),a.createElement(s.Z,{href:n.allTagsPath},a.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),u.map((function(e){var t=e.content;return a.createElement(d.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},a.createElement(t,null))})),a.createElement(g.Z,{metadata:b})))}},22685:function(e,t,n){n.d(t,{Z:function(){return y}});var a,r,l,i,o,m=n(67294),s=n(3905),c=n(35742),d=n(39960),g=n(35058),p=n(44996),u=n(52263),h=n(66114),b=n(52719),f=n(95999),E=n(88824),v=n(92949),_="blogPostTitle_uMeh",N=n(37446),x=n(32125),Z=(0,x.iv)(a||(a=(0,N.Z)(["\n  h2 {\n    /* font-size: 1.6em; */\n\n    /* border-bottom: 2px solid var(--ifm-link-color); */\n    /* padding-top: 0.4em;\n    padding-bottom: 0.3em; */\n  }\n\n  h3 {\n    /* font-size: 1em; */\n    /* color: var(--ifm-link-color); */\n  }\n\n  /* h2,\n  h3 {\n    color: var(--post-title-color);\n  } */\n\n  p,\n  li,\n  a {\n    /* font-size: 1em; */\n    /* font-size: 18px; */\n    /* text-align: justify; */\n    /* letter-spacing: 0.04em; */\n  }\n\n  p,\n  li {\n    /* color: var(--text-color); */\n  }\n"]))),k=x.ZP.section(r||(r=(0,N.Z)(["\n  ",";\n  ","\n"])),(function(e){return e.isDark?"\n":Z}),(function(e){return e.isBlogPostPage?"":(0,x.iv)(l||(l=(0,N.Z)(["\n/* img {\n  width: 100%;\n  height: 40%;\n  max-width: 100%;\n  max-height: 400px;\n  object-fit: cover;\n  object-position: top;\n} */\n"])))})),w=x.ZP.div(i||(i=(0,N.Z)(["\n  margin-top: 0em;\n  margin-bottom: 1.5em;\n\n  ","\n\n  @media (max-width: 570px) {\n    .article__details {\n      padding: 0;\n    }\n  }\n\n  article {\n    .single-post--date {\n      color: var(--ifm-color-primary);\n      font-size: 0.9em;\n    }\n\n    > header {\n      > h1 {\n        font-size: 2em;\n        /* color: #2f5c85; */\n        @media (max-width: 570px) {\n          & {\n            font-size: 1.6em;\n            text-align: center;\n          }\n        }\n      }\n\n      > h2 {\n        font-size: 2em;\n        /* line-height: 1.5em; */\n        margin-bottom: 10px !important;\n        a {\n          color: var(--ifm-heading-color);\n          &:hover {\n            text-decoration: none;\n          }\n        }\n        @media (max-width: 570px) {\n          & {\n            font-size: 1.7em;\n          }\n        }\n      }\n\n      > div > time {\n        color: var(--post-pub-date-color);\n      }\n    }\n\n    .markdown p,\n    .markdown ul {\n      font-family: var(--content-font-family);\n    }\n\n    > section {\n      /*pre {\n        > code {\n          padding: 1.8rem 1rem 1rem 1rem;\n        }\n      }\n\n       pre:before {\n        content: '';\n        position: absolute;\n        top: 9px;\n        left: 15px;\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        background: #fc625d;\n        box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;\n        z-index: 1;\n      } */\n    }\n  }\n\n  /* \u5361\u7247\u65b0\u62df\u6001\u7279\u6548 */\n  .blog-list--item {\n    background: var(--blog-item-background-color);\n    box-shadow: var(--blog-item-shadow);\n    padding: 1em 1em;\n\n    position: relative;\n  }\n\n  @media (max-width: 1000px) {\n    .blog-list--item {\n      padding-right: 1em;\n    }\n  }\n\n  .testt {\n    position: absolute;\n    font-size: 12vw;\n    color: #c8a3ff;\n  }\n\n  /* @media (max-width: 570px) {\n    box-shadow: none;\n    padding: 0;\n  } */\n"])),(function(e){return e.isBlogPostPage&&(0,x.iv)(o||(o=(0,N.Z)(["\n$ {\n  '' /* box-shadow: var(--post-shadow); */\n}\nborder - radius: var (--ifm - pagination - nav - border - radius);\n$ {\n  '' /* padding: 2em 2em; */\n}\nmargin - top: 0;\nmargin - bottom: -2 em;\n"])))})),P=n(92814),T=n(51436);function y(e){var t,n=(t=(0,E.c)().selectMessage,function(e){var n=Math.ceil(e);return t(n,(0,f.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}),a=e.children,r=e.frontMatter,l=e.assets,i=e.metadata,o=e.truncated,N=e.isBlogPostPage,x=void 0!==N&&N,Z=(e.views,i.date),y=i.formattedDate,I=i.permalink,z=i.tags,L=i.readingTime,M=i.title,A=i.editUrl,B=i.authors,D=(r.slug,r.image),F=(0,p.Z)(D,{absolute:!0}),G=(0,v.I)().isDarkTheme,R=(0,u.Z)().i18n.currentLocale,S=new Date(Z),C=S.getFullYear(),O=S.getMonth()+1,U=S.getDate(),j=C+" \u5e74 "+O+" \u6708";"en"===R&&(j=" "+C+" - "+(O=S.toLocaleString("default",{month:"long"})));var Y,$=function(){return(z.length>0||o)&&m.createElement("div",{className:"post__tags-container margin-bottom--md"},z.length>0&&m.createElement(m.Fragment,null,m.createElement(P.G,{icon:T.tho,className:"margin-right--md"}),z.slice(0,4).map((function(e,t){var n=e.label,a=e.permalink;return m.createElement(d.Z,{key:a,className:"post__tags "+(t>0?"margin-horiz--sm":"margin-right--sm"),to:a,style:{fontSize:"0.75em",fontWeight:500}},n)}))))};return m.createElement(w,{isDark:G,isBlogPostPage:x},m.createElement(c.Z,null,D&&m.createElement("meta",{property:"og:image",content:F}),D&&m.createElement("meta",{property:"twitter:image",content:F}),D&&m.createElement("meta",{name:"twitter:image:alt",content:"Image for "+M})),m.createElement("div",{className:"row "+(x?"":"blog-list--item"),style:{margin:"0px"}},!x&&m.createElement("div",{className:"post__date-container col col--3 padding-right--lg margin-bottom--lg"},m.createElement("div",{className:"post__date"},m.createElement("div",{className:"post__year_month"},j),m.createElement("div",{className:"post__day"},U)),m.createElement("div",{className:"line__decor"})),m.createElement("div",{className:"col "+(x?"col--12 article__details":"col--9")},m.createElement("article",{className:x?void 0:"margin-bottom--md"},(Y=x?"h1":"h2",m.createElement("header",null,m.createElement(Y,{className:_,itemProp:"headline"},x?M:m.createElement(d.Z,{itemProp:"url",to:I},M)),m.createElement(b.Z,{authors:B,assets:l}))),!x&&m.createElement("p",{className:"reading-time"},m.createElement(P.G,{icon:T.SZw,className:"margin-right--md"}),void 0!==L&&m.createElement(m.Fragment,null,n(L))),!x&&$(),x&&m.createElement("p",{className:"single-post--date text--center"},m.createElement(P.G,{icon:T.a1i,className:"margin-right--md"}),m.createElement("time",{dateTime:Z,itemProp:"datePublished"},y),m.createElement("br",null),m.createElement("br",null),m.createElement(P.G,{icon:T.SZw,className:"margin-right--md"}),void 0!==L&&m.createElement(m.Fragment,null,n(L))),x&&m.createElement(m.Fragment,null,m.createElement("div",{className:"text--center margin-bottom--xs padding-bottom--xs"},$())),m.createElement(k,{isBlogPostPage:x,isDark:G,className:"markdown"},m.createElement(s.Zo,{components:g.Z},a))),m.createElement("footer",{className:"article__footer padding-top--md margin-top--lg margin-bottom--lg"},!x&&m.createElement("span",{className:"footer__read_count"}),x&&A&&m.createElement("div",{className:"col margin-top--sm"},m.createElement(h.Z,{editUrl:A})),o&&m.createElement(d.Z,{to:i.permalink,"aria-label":(0,f.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:M})},m.createElement("b",null,m.createElement(f.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);
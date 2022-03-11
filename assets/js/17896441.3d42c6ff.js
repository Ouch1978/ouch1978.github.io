"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[7918],{73947:function(e,t,a){a.r(t),a.d(t,{default:function(){return Y}});var n=a(67294),l=a(86010),r=a(83117),i=a(95999),s=a(71750);function c(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s.Z,(0,r.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(s.Z,(0,r.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var o=a(52263),d=a(39960),m=a(65551),u=a(59553);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function E(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,a=e.className,r=e.versionMetadata,i=(0,o.Z)().siteConfig.title,s=(0,m.gA)({failfast:!0}).pluginId,c=(0,u.J)(s).savePreferredVersionName,d=(0,m.Jo)(s),v=d.latestDocSuggestion,b=d.latestVersionSuggestion,p=null!=v?v:(t=b).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:i,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(E,{versionLabel:b.label,to:p.path,onClick:function(){return c(b.name)}})))}function p(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(b,{className:t,versionMetadata:a}):null}function g(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}var f=a(41217);function Z(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function _(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(Z,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(_,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(86753),L=a(7774),U="tags_XVD_",T="tag_JSN8";function w(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(U,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:T},n.createElement(L.Z,{name:t,permalink:a}))}))))}var M="lastUpdated_foO9";function y(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(w,e)))}function C(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(k.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",M)},(a||r)&&n.createElement(N,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function A(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,c=t.tags,o=c.length>0,d=!!(a||r||s);return o||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(y,{tags:c}),d&&n.createElement(C,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var B=a(53944);function x(e){var t=e.content,a=t.metadata,l=t.frontMatter.no_comments,r=a.title,i=a.slug;return n.createElement(n.Fragment,null,n.createElement(A,e),!l&&n.createElement(B.qw,{shortname:"ouch1978",config:{identifier:i,title:r,language:"zh-TW"}}))}var D=a(51575),V="tocCollapsible_jdIR",I="tocCollapsibleButton_Fzxq",S="tocCollapsibleContent_MpvI",F="tocCollapsibleExpanded_laf4",H=a(25002);function O(e){var t,a=e.toc,r=e.className,s=e.minHeadingLevel,c=e.maxHeadingLevel,o=(0,u.uR)({initialState:!0}),d=o.collapsed,m=o.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(V,(t={},t[F]=!d,t),r)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",I),onClick:m},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:S,collapsed:d},n.createElement(H.Z,{toc:a,minHeadingLevel:s,maxHeadingLevel:c})))}var R=a(39649),z="docItemContainer_vinB",P="docItemCol_DM6M",q="tocMobile_TmEX",W="breadcrumbsContainer_Xlws",J="breadcrumbsItemLink_e5ie",Q=a(44996);function X(e){var t=e.children,a=e.href,r=(0,l.Z)("breadcrumbs__link",J);return a?n.createElement(d.Z,{className:r,href:a},t):n.createElement("span",{className:r},t)}function j(e){var t=e.children,a=e.active;return n.createElement("li",{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t)}function G(){var e=(0,Q.Z)("/");return n.createElement(j,null,n.createElement(X,{href:e},"\ud83c\udfe0"))}function K(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,W),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs"},t&&n.createElement(G,null),e.map((function(t,a){return n.createElement(j,{key:a,active:a===e.length-1},n.createElement(X,{href:t.href},t.label))})))):null}function Y(e){var t,a,r=e.content,i=r.metadata,s=r.frontMatter,o=r.assets,d=s.keywords,m=s.hide_title,v=s.hide_table_of_contents,h=s.toc_min_heading_level,E=s.toc_max_heading_level,b=i.description,Z=i.title,_=null!=(t=o.image)?t:s.image,N=!m&&void 0===r.contentTitle,k=(0,u.iP)(),L=!v&&r.toc&&r.toc.length>0,U=L&&("desktop"===k||"ssr"===k);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:Z,description:b,keywords:d,image:_}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(a={},a[P]=!v,a))},n.createElement(p,null),n.createElement("div",{className:z},n.createElement("article",null,n.createElement(K,null),n.createElement(g,null),L&&n.createElement(O,{toc:r.toc,minHeadingLevel:h,maxHeadingLevel:E,className:(0,l.Z)(u.kM.docs.docTocMobile,q)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},N&&n.createElement("header",null,n.createElement(R.Z,{as:"h1"},Z)),n.createElement(r,null)),n.createElement(x,e)),n.createElement(c,{previous:i.previous,next:i.next}))),U&&n.createElement("div",{className:"col col--3"},n.createElement(D.Z,{toc:r.toc,minHeadingLevel:h,maxHeadingLevel:E,className:u.kM.docs.docTocDesktop}))))}},86753:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),l=a(95999),r=a(83117),i=a(80102),s=a(86010),c="iconEdit_dcUD",o=["className"];function d(e){var t=e.className,a=(0,i.Z)(e,o);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var m=a(59553);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},39649:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(83117),l=a(80102),r=a(67294),i=a(86010),s=a(95999),c=a(59553),o="anchorWithStickyNavbar_mojV",d="anchorWithHideOnScrollNavbar_R0VQ",m=["as","id"],u=["as"];function v(e){var t,a=e.as,u=e.id,v=(0,l.Z)(e,m),h=(0,c.LU)().navbar.hideOnScroll;return u?r.createElement(a,(0,n.Z)({},v,{className:(0,i.Z)("anchor",(t={},t[d]=h,t[o]=!h,t)),id:u}),v.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(a,v)}function h(e){var t=e.as,a=(0,l.Z)(e,u);return"h1"===t?r.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):r.createElement(v,(0,n.Z)({as:t},a))}},71750:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294),l=a(39960);function r(e){var t=e.permalink,a=e.title,r=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),l=a(86010),r=a(39960),i="tag_hD8n",s="tagRegular_D6E_",c="tagWithCount_i0QQ";function o(e){var t,a=e.permalink,o=e.name,d=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(i,(t={},t[s]=!d,t[c]=d,t))},o,d&&n.createElement("span",null,d))}}}]);
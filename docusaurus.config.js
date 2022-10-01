// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const katex = require("rehype-katex");
const math = require("remark-math");
const path = require("path");

const unified = require("unified");
const remarkParse = require("remark-parse");
const stringify = require("rehype-stringify");
const remark2rehype = require("remark-rehype");

const remarkGridTables = require("remark-grid-tables");

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

require("dotenv").config();

function unwrapCategory(items) {
  const newItems = [];

  items.forEach((item) => {
    const isDoc = item.type === "doc";
    const isCategory = item.type === "category";
    const hasOnlyOneDocItem = isCategory && item.items.length === 1 && item.items[0].type === "doc";
    if (isDoc) {
      newItems.push(item);
      return;
    }

    if (hasOnlyOneDocItem) {
      newItems.push(item.items[0]);
      return;
    }

    item.items = unwrapCategory(item.items);
    newItems.push(item);
  });

  return newItems;
}

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "OUCH1978@GITHUB",
  tagline: "不務正業的架構師",
  url: "https://ouch1978.github.io", //process.env.URL,
  baseUrl: "/", //process.env.BASE_URL,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  organizationName: "Ouch1978", // Usually your GitHub org/user name.
  projectName: "ouch1978.github.io", // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    ["docusaurus2-dotenv",
      {
        systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
      },
    ]
  ],
  themes: ['@saucelabs/theme-github-codeblock'],
  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    metadata: [{
        name: 'robots',
        content: 'max-image-preview:large'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'fb:app_id',
        content: '173025689387886'
      }
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    algolia: {
      appId: 'XA2FZH7CHR',
      apiKey: '52ba1dbf6e599f15075a60d464318d01',
      indexName: 'ouch1978',
      contextualSearch: true,
    },
    zoom: {
      selector: '.markdown :not(em,a) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },
    prism: {
      additionalLanguages: ["powershell", "csharp", "cshtml", "java", "php", "aspnet", "toml"],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    navbar: {
      title: "OUCH1978@GITHUB",
      logo: {
        alt: "Site Logo",
        src: "img/logo.png",
      },
      items: [{
          type: "doc",
          docId: "intro/intro",
          position: "left",
          label: "文件庫",
        },
        {
          to: "/blog",
          label: "部落格",
          position: "left",
        },
        {
          to: "pathname:///slides",
          label: "投影片",
          position: "right",
        }
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Ouch Liu(劉耀群). Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleAnalytics: {
          trackingID: 'UA-20523508-2',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ouch1978/ouch1978.github.io/edit/main",
          remarkPlugins: [math, remarkGridTables],
          rehypePlugins: [
            [katex, {
              strict: false
            }]
          ],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
          /*
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return unwrapCategory(sidebarItems);
          },
          */
        },
        blog: {
          blogSidebarCount: 0,
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/ouch1978/ouch1978.github.io/edit/main",
          remarkPlugins: [math, remarkGridTables],
          rehypePlugins: [
            [katex, {
              strict: false
            }]
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [{
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700;900&display=swap",
    },
  ],
  scripts: [{
      src: "https://cdnjs.cloudflare.com/ajax/libs/pangu/4.0.7/pangu.min.js",
      async: true,
    },
    {
      src: "/assets/enablePangu.js",
      async: true,
    },
  ],
};

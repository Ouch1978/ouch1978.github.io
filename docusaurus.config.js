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
  organizationName: "Ouch1978", // Usually your GitHub org/user name.
  projectName: "Ouch1978.github.io", // Usually your repo name.
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
  themes: ["@saucelabs/theme-github-codeblock"],
  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    hideableSidebar: true,
    algolia: {
      appId: 'AG6O0X1DB7',
      apiKey: '849e564e75143705de1058ace77a188d',
      indexName: 'Ouch1978 @GitHub.io',
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
      additionalLanguages: ["powershell", "csharp", "cshtml", "java", "php", "aspnet"],
      theme: require("prism-react-renderer/themes/vsDark"),
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
      copyright: `Copyright © ${new Date().getFullYear()} Ouch Liu(Ouch1978). Built with Docusaurus.`,
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
          editUrl: "https://github.com/ouch1978/ouch1978.github.io/edit/main/website",
          remarkPlugins: [math, remarkGridTables],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
          breadcrumbs: true,
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return unwrapCategory(sidebarItems);
          },
        },
        blog: {
          blogSidebarCount: 0,
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/ouch1978/ouch1978.github.io/edit/main/website",
          remarkPlugins: [math, remarkGridTables],
          rehypePlugins: [katex],
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
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap",
      type: "text/css",
      crossorigin: "anonymous",
    },
  ],
  scripts: [{
      src: "https://cdnjs.cloudflare.com/ajax/libs/pangu/4.0.7/pangu.min.js",
      async: true,
    },
    {
      src: process.env.BASE_URL + "assets/enablePangu.js",
      async: true,
    },
  ],
};

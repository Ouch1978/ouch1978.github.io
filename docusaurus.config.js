const math = require("remark-math");
const katex = require("rehype-katex");
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
  baseUrl: "/",//process.env.BASE_URL,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Ouch1978", // Usually your GitHub org/user name.
  projectName: "Ouch1978", // Usually your repo name.
  plugins: [
    "plugin-image-zoom",
    [
      "docusaurus2-dotenv",
      {
        systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
      },
    ],
  ],
  themes: ["@saucelabs/theme-github-codeblock"],
  themeConfig: {
    hideableSidebar: true,
    zoomSelector: ".markdown :not(em) > img",
    prism: {
      additionalLanguages: ["powershell", "csharp", "java", "php"],
      theme: require("prism-react-renderer/themes/vsDark"),
    },
    navbar: {
      title: "OUCH1978@GITHUB",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro/intro",
          position: "left",
          label: "Documents",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        }
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Ouch1978, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ouch1978/ouch1978.github.io/edit/main/website",
          remarkPlugins: [math, remarkGridTables],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
          sidebarItemsGenerator: async function ({ defaultSidebarItemsGenerator, ...args }) {
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
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  scripts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/pangu/4.0.7/pangu.min.js",
      async: true,
    },
    {
      src: process.env.BASE_URL + "assets/enablePangu.js",
      async: true,
    },
  ],
};

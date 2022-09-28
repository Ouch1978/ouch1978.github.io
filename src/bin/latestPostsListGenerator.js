const glob = require("glob");
const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
const moment = require("moment");

const docsPath = ".docusaurus/docusaurus-plugin-content-docs/default";
const blogPath = ".docusaurus/docusaurus-plugin-content-blog/default";
const srcPath = "./src";

const 

generateList();

function generateList() {
  let allBlogPosts = {};

  let allDocs = {};

  const docFiles = glob.sync(`${docsPath}/site-docs-*.md`);
  docFiles.map((file) => {
    const matterData = matter.read(file);

    console.log(matterData);

    const latestModifiedAt = fs.statSync(file).mtime;

    if (matterData.path != null) {
      allDocs[matterData.path] = matterData.data;
      allDocs[matterData.path].id = latestModifiedAt;
      allDocs[matterData.path].path = matterData.path;
    }
  });

  const blogFiles = glob.sync(`${blogPath}/site-blog-*.md`);
  blogFiles.map((file) => {
    const matterData = matter.read(file);
    const latestModifiedAt = fs.statSync(file).mtime;

    if (matterData.path != null) {
      allPosts[matterData.path] = matterData.data;
      allPosts[matterData.path].id = latestModifiedAt;
      allPosts[matterData.path].path = matterData.path;
    }
  });

  const allIds = Object.keys(allPosts);
  const latestIds = allIds.sort().slice(-10, -1);
  const latestPosts = latestIds.map((v) => allPosts[v]);
  fs.writeFileSync(`${srcPath}/config/latest-posts.json`, JSON.stringify(latestPosts, null, 2));
}

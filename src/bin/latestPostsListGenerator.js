const glob = require("glob");
const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
const moment = require("moment");

// 全局定义
const docsPath = ".docusaurus/docusaurus-plugin-content-docs/default"; // docs 目录
const blogPath = ".docusaurus/docusaurus-plugin-content-blog/default"; // blog 目录
const srcPath = "./src";

generateList();

function generateList() {
  let allPosts = {}; // 所有文章

  //遍历 docs 下所有文件夹和文件
  const docFiles = glob.sync(`${docsPath}/site-docs-*.md`);
  docFiles.map((file) => {
    const matterData = matter.read(file);

    console.log(matterData);

    const latestModifiedAt = fs.statSync(file).mtime;

    if (matterData.path != null) {
      allPosts[matterData.path] = matterData.data;
      allPosts[matterData.path].id = latestModifiedAt;
      allPosts[matterData.path].path = matterData.path;
    }
  });

  // 遍历 blog 下所有文件
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

  // return maxID
}

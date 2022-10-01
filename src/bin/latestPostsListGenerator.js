const glob = require("glob");
const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
const moment = require("moment");

const blogPath = "./.docusaurus/docusaurus-plugin-content-blog/default";
const blogFilesPattern = "site-blog-*.json";
const latestBlogPostList = "./src/components/LatestPosts/latest-blog-posts.json";

const docsPath = "./.docusaurus/docusaurus-plugin-content-docs/default";
const docFilesPattern = "site-docs-*.json";
const latestDocsList = "./src/components/LatestPosts/latest-docs.json";

generateLatestPostList(blogPath, blogFilesPattern, latestBlogPostList);

generateLatestPostList(docsPath, docFilesPattern, latestDocsList);

function generateLatestPostList(folderPath, filesPattern, outputPath) {
  let allItems = {};

  const blogFiles = glob.sync(path.join(folderPath, filesPattern));

  blogFiles.map((file) => {
    const rawdata = fs.readFileSync(file);
    const item = JSON.parse(rawdata);

    if (item != null && item.draft != true) {
      console.log(item);

      item.date ??= item.lastUpdatedAt;
      item.formattedDate ??= item.formattedLastUpdatedAt;

      let tempDate = item.formattedDate.replace('日','');

      let indexOfMonth = tempDate.indexOf('月');

      let yearMonth = tempDate.substr(0, indexOfMonth + 1);

      let day = tempDate.substr(indexOfMonth + 1);

      allItems[item.date] = new Object();
      allItems[item.date].title = item.title;
      allItems[item.date].permalink = item.permalink;
      allItems[item.date].description = item.description;
      allItems[item.date].tags = item.tags;
      allItems[item.date].date = item.date;
      allItems[item.date].yearMonth = yearMonth;
      allItems[item.date].day = day;
      allItems[item.date].formattedDate = item.formattedDate;
    }
  });

  const allIds = Object.keys(allItems);
  const latestIds = allIds.sort().reverse().slice(0, 5);
  const latestItems = latestIds.map((v) => allItems[v]);

  generateLatestFile(latestItems, outputPath);
}

function generateLatestFile(allPosts, filePath) {
  fs.writeFileSync(filePath, JSON.stringify(allPosts, null, 2));
}

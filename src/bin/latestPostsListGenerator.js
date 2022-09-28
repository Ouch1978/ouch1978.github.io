const glob = require("glob");
const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
const moment = require("moment");

const blogPath = "./.docusaurus/docusaurus-plugin-content-blog/default";

const docsPath = "./.docusaurus/docusaurus-plugin-content-docs/default";

generateLatestBlogList();

generateLatestDocsList();

function generateLatestBlogList() {
  let allBlogPosts = {};

  const blogFiles = glob.sync(path.join(blogPath, "site-blog-*.json"));

  blogFiles
    .reverse()
    .slice(0, 5)
    .map((file) => {
      const rawdata = fs.readFileSync(file);
      const blogPost = JSON.parse(rawdata);

      if (blogPost != null) {
        console.log(blogPost.permalink);
        allBlogPosts[blogPost.permalink] = blogPost;
        allBlogPosts[blogPost.permalink].id = blogPost.date;
        allBlogPosts[blogPost.permalink].title = blogPost.title;
        allBlogPosts[blogPost.permalink].tags = blogPost.tags;
        allBlogPosts[blogPost.permalink].formattedDate = blogPost.formattedDate;
      }
    });

  generateLatestFile(allBlogPosts, "./src/config/latest-blog-posts.json");
}

function generateLatestDocsList() {
  let allDocs = {};

  const docFiles = glob.sync(path.join(docsPath, "site-docs-*.json"));

  docFiles
    .reverse()
    .slice(0, 5)
    .map((file) => {
      const rawdata = fs.readFileSync(file);
      const doc = JSON.parse(rawdata);

      if (doc != null) {
        console.log(doc.permalink);
        allDocs[doc.permalink] = doc;
        allDocs[doc.permalink].id = doc.lastUpdatedAt;
        allDocs[doc.permalink].title = doc.title;
        allDocs[doc.permalink].tags = doc.tags;
        allDocs[doc.permalink].formattedDate = doc.formattedLastUpdatedAt;
      }
    });
    generateLatestFile(allDocs, "./src/config/latest-docs.json");
}

function generateLatestFile(allPosts, filePath) {
  fs.writeFileSync(filePath, JSON.stringify(allPosts, null, 2));
}

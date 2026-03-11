const path = require("path");
const fs = require("fs");

function serveStaticSitesPlugin(context) {
  const siteDir = context.siteDir;
  const staticDir = path.join(siteDir, "static");
  const staticEntries = [
    { directory: staticDir, publicPath: "/" },
  ];
  ["fortune-slip", "slides"].forEach((subdir) => {
    const dir = path.join(staticDir, subdir);
    if (fs.existsSync(dir)) {
      staticEntries.push({
        directory: dir,
        publicPath: `/${subdir}`,
      });
    }
  });

  return {
    name: "serve-static-sites",
    configureWebpack() {
      return {
        devServer: {
          static: staticEntries,
        },
      };
    },
  };
}

module.exports = serveStaticSitesPlugin;

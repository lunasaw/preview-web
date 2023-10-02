const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

const ENV = process.env.NODE_ENV;

module.exports = {
  publicPath: ENV === "development" ? "" : "/preview-web/",
  outputDir: "dist",
};

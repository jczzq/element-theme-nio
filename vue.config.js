const path = require("path");

module.exports = {
  pages: {
    index: "example/main.js"
  },
  outputDir: "docs",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "./example"),
        src: path.join(__dirname, "./src"),
        lib: path.join(__dirname, "./lib")
      }
    }
  }
};

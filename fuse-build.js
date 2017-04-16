const { FuseBox, BabelPlugin } = require("fuse-box")

FuseBox.init({
  homeDir: "src/",
  sourcemaps: {
    bundleReference: "./public/sourcemaps.js.map",
    outFile: "./public/sourcemaps.js.map",
  },
  outFile: "./public/bundle.js",
  plugins: [
    BabelPlugin()
  ]
// }).bundle(">index.js")
}).devServer(">index.js")

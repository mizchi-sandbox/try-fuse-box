const { FuseBox, BabelPlugin } = require("fuse-box")

FuseBox.init({
  homeDir: "src/",
  sourcemaps: {
    bundleReference: "./sourcemaps.js.map",
    outFile: "sourcemaps.js.map",
  },
  outFile: "./public/bundle.js",
  plugins: [
    BabelPlugin()
  ]
}).bundle(">index.js")

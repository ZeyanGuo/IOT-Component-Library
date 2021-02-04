var path = require("path");
var nodeExternals = require("webpack-node-externals");

var externals = {};

externals = [
  Object.assign(
    {
      vue: "vue",
    },
    externals
  ),
  nodeExternals(),
];

exports.externals = externals;

exports.alias = {
  packages: path.resolve(__dirname, "../packages"),
};

exports.vue = {
  root: "Vue",
  commonjs: "vue",
  commonjs2: "vue",
  amd: "vue",
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

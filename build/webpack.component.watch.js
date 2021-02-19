const { merge } = require("webpack-merge");
const config = require("./webpack.component");

const output = merge(config, {
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 200,
  },
});

module.exports = output;

const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "webpackFinal": async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.push({
      test: /[\/\\]element-ui[\/\\].+\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@vue/cli-plugin-babel/preset']
          ],
        }
      }
    })
    config.output.publicPath = process.env.NODE_ENV === 'production' ? '/micrApp/storybook-static' : '/'
    return config;
  },
}
/* eslint-disable @typescript-eslint/no-var-requires */
const { createReactWebpackConfig } = require("@leanjs/webpack-react");

module.exports = {
  devServer: {
    port: 33000,
    disableHostCheck: true,
  },
  webpack: {
    react: createReactWebpackConfig(),
  },
};

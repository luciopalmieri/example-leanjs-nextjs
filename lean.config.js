/* eslint-disable @typescript-eslint/no-var-requires */
const { createReactWebpackConfig } = require("@leanjs/webpack-react");

module.exports = {
  devServer: {
    port: 33000,
    allowedHosts: "all",
  },
  webpack: {
    react: createReactWebpackConfig(),
  },
};

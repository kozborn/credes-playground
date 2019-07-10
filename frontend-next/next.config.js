const withCSS = require("@zeit/next-css");
module.exports = withCSS(
  process.env.NODE_ENV == "production"
    ? {
        assetPrefix: "/credes-frontend",
        webpack: config => {
          config.output.publicPath = `/credes-frontend${
            config.output.publicPath
          }`;
          return config;
        },
        exportPathMap: function() {
          return {
            "/": { page: "/" }
          };
        }
      }
    : {}
);

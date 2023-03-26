const { createProxyMiddleware } = require("http-proxy-middleware");
// import {createProxyMiddleware} from 'http-proxy-middleware'

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json",
      changeOrigin: true,
    })
  );
};

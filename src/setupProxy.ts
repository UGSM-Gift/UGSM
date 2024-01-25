import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';

module.exports = function (app: { use: (arg0: RequestHandler) => void }) {
  app.use(
    createProxyMiddleware('/api/user/me', {
      target: 'https://www.ugsm.co.kr',
      changeOrigin: true,
    })
  );
};

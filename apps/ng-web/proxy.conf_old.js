const PROXY_CONFIG = {
  '/api': {
    target: 'http://my-backend.com',
    changeOrigin: true,
    secure: false,
    logLevel: 'debug',
    onProxyRes: function (pr, req, res) {
      if (pr.headers['set-cookie']) {
        const cookies = pr.headers['set-cookie'].map((cookie) =>
          cookie.replace(/;(\ )*secure/gi, ''),
        );
        pr.headers['set-cookie'] = cookies;
      }
    },
  },
};

module.exports = PROXY_CONFIG;

// This scenario rarely occurs. The target backend specify a cookie path, but it’s not apply to ours paths if for example we use pathRewrite .

const PROXY_CONFIG = {
  '/api': {
    target: 'http://my-backend.com',
    changeOrigin: true,
    secure: false,
    logLevel: 'debug',
    pathRewrite: {
      '^/api': '/api-dev',
    },
    cookiePathRewrite: {
      '/api-dev': '/api',
    },
  },
};
module.exports = PROXY_CONFIG;

const PROXY_CONFIG = [
  {
    context: ['/api/setting', '/api/user', '/api/product'],
    target: 'http://localhost:3333',
    secure: false,
  },
  {
    context: ['/api1/setting', '/api1/user', '/api1/product'],
    target: 'http://localhost:3333',
    secure: false,
  },
];

module.exports = PROXY_CONFIG;

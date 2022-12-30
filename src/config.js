const dev = {
  appengine: {
    host: 'http://localhost:3300',
    method: 'http',
  },
};

const prod = {
  appengine: {
    host: 'appengine.appmint.io',
    method: 'https',
  },
};

const appConfig = {
  MAX_ATTACHMENT_SIZE: 5000000,
  siteId: 'localhost',
  useAppEngine: true,
  ...(process.env.REACT_APP_STAGE === 'prod' ? prod : dev),
};

export { appConfig };

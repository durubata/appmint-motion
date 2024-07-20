const dev = {
  appengine: {
    host: 'http://localhost:3300',
  },
};
const prod = {
  appengine: {
    host: 'https://appengine.appmint.io',
  },
};

const appConfig = {
  MAX_ATTACHMENT_SIZE: 5000000,
  orgId: 'demo',
  useAppEngine: true,
  ...(process.env.REACT_APP_STAGE === 'prod' ? prod : dev),
};

export { appConfig };

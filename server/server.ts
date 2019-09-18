import 'source-map-support/register';
// import { NextFunction, Request, Response } from 'express';
const path = require('path');
const express = require('express');
const nodeCache = require('node-cache');
const nextjs = require('next');
// const routes = require('./routes/index');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const frameguard = require('frameguard');

const routes = require('./routes/index');

// Import Configs
const rootPath = require('./utils/path');

// Import Middleware
const cacheControlMiddleware = require('./middleware/cache-control');

// Routes
// const apiRoutes = require('./routes/api');

// Establish some basics
const port = parseInt(process.env.SERVER_PORT || '3000', 10);
const env = process.env.NODE_ENV || 'development';
const dev = env !== 'production';
const app = nextjs({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  const cacheStore = new nodeCache();

  server.disable('x-powered-by'); // https://helmetjs.github.io/docs/hide-powered-by
  server.use(frameguard({ action: 'deny' })); // https://helmetjs.github.io/docs/frameguard
  server.use(helmet.noSniff()); // https://helmetjs.github.io/docs/dont-sniff-mimetype/
  server.enable('strict routing');
  server.use(compression());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(cookieParser());

  // Next iteration should take the data from there.
  server.use(
    cacheControlMiddleware({
      cache: cacheStore,
      defaultTTL: process.env.CACHE_TTL
    })
  );

  server.set('trust proxy', true);

  server.use('*', (req, res, next) => {
    next();
  });

  // server.use(handler);

  const staticPath = path.join(rootPath, './static');

  server.get(
    '/static',
    express.static(staticPath, {
      maxAge: '30d',
      immutable: true
    })
  );

  /* eslint disable */
  // tslint:disable-next-line:only-arrow-functions
  function startServer() {
    server.use(handler).listen(port, () => {
      console.log(`> Env is: ${process.env.NODE_ENV}`);
      console.log(`> Ready on port: ${port}`);
    });
  }

  /* eslint enable */

  startServer();
});

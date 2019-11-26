import 'source-map-support/register';
import 'isomorphic-unfetch';
import express, { Request, Response } from 'express';
import path from 'path';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import frameGuard from 'frameguard';
import nodeCache from 'node-cache';
import nextJs from 'next';

// Import Middleware
import cacheControlMiddleware from './middleware/cache-control';

// Routes
import apiRoutes from './routes/api';

// Establish some basics
const port = parseInt(process.env.SERVER_PORT || '3000', 10);
const env = process.env.NODE_ENV || 'development';
const dev = env !== 'production';
const app = nextJs({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const cacheStore = new nodeCache();

  server.disable('x-powered-by'); // https://helmetjs.github.io/docs/hide-powered-by
  server.use(frameGuard({ action: 'deny' })); // https://helmetjs.github.io/docs/frameguard
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

  server.get('/status', (req: Request, res: Response) => {
    res.send('ok');
  });

  server.use('/api', apiRoutes);

  const staticPath = path.join(__dirname, './src/static');

  server.get(
    '/static',
    express.static(staticPath, {
      maxAge: '30d',
      immutable: true
    })
  );

  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS
  server.get('*', (req: Request, res: Response) => {
    return handler(req, res);
  });

  const startServer = () => {
    server.listen(port, () => {
      console.log(`> Env is: ${process.env.NODE_ENV}`);
      console.log(`> Ready on port: ${port}`);
    });
  };

  startServer();
});

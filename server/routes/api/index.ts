import express from 'express';
import devApiRoutes from './dev';
import prodApiRoutes from './prod';

const server = express();
const env = process.env.NODE_ENV || 'development';
const dev = env === 'development' || env === 'test';

if (dev) {
  devApiRoutes(server);
}

prodApiRoutes(server);

export default server;

import express from 'express';

import categoriesRoutes from './categories';
import categoryRoutes from './category';
import coreRoutes from './core';
import menuRoutes from './menus';
import pageRoutes from './page';
import postRoutes from './post';
import postsRoutes from './posts';
import searchRoutes from './search/index';
import tagRoutes from './tag';
import tagsRoutes from './tags';
import wordRoutes from './word';
import wordsRoutes from './words';
import wordCategoriesRoutes from './word_categories';
import wordCategoryRoutes from './word_category/index';
import wordTagRoutes from './word_tag/index';
import wordTagsRoutes from './word_tags';

const server = express();
const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development' || env === 'test';

categoriesRoutes(server, isDev);
categoryRoutes(server, isDev);
coreRoutes(server, isDev);
menuRoutes(server, isDev);
pageRoutes(server, isDev);
postRoutes(server, isDev);
postsRoutes(server, isDev);
tagRoutes(server, isDev);
tagsRoutes(server, isDev);
wordRoutes(server, isDev);
wordCategoryRoutes(server, isDev);
wordCategoriesRoutes(server, isDev);
wordTagRoutes(server, isDev);
wordTagsRoutes(server, isDev);
wordsRoutes(server, isDev);
searchRoutes(server, isDev);

export default server;

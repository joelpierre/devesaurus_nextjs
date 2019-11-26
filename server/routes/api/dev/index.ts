import { Application } from 'express';
import categoriesRoutes from './categories';
import categoryRoutes from './category';
import coreRoutes from './core';
import pageRoutes from './page';
import postRoutes from './post';
import postsRoutes from './posts';
import tagRoutes from './tag';
import tagsRoutes from './tags';
import wordRoutes from './word';
import wordCategoriesRoutes from './word_categories';
import wordTagRoutes from './word_tags';
import wordsRoutes from './words';

const devApiRoutes = (server: Application) => {
  categoriesRoutes(server);
  categoryRoutes(server);
  coreRoutes(server);
  pageRoutes(server);
  postRoutes(server);
  postsRoutes(server);
  tagRoutes(server);
  tagsRoutes(server);
  wordRoutes(server);
  wordCategoriesRoutes(server);
  wordTagRoutes(server);
  wordsRoutes(server);
};

export default devApiRoutes;

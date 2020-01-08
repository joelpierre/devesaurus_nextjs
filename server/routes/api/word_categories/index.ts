import { Application, Request, Response } from 'express';
import { DEV_FETCH_URL, WP_V2_ENDPOINT, PROD_FETCH_URL, ITEMS_PER_REQUEST } from '../../../utils/constants';

const wordCategoriesRoutes = (server: Application, isDev: boolean) => {
  server.get('/word_categories', async (request: Request, response: Response) => {
    const url = `${isDev ? DEV_FETCH_URL : PROD_FETCH_URL}/${WP_V2_ENDPOINT}/word_category?per_page=${ITEMS_PER_REQUEST}`;

    try {
      const wordCategories = await fetch(url).then(res => res.json());
      response.status(200).send(wordCategories);
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default wordCategoriesRoutes;

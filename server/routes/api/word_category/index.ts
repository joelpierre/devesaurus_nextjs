import { Application, Request, Response } from 'express';
import {
  BETTER_REST_ENDPOINT,
  DEV_FETCH_URL, ITEMS_PER_REQUEST, PROD_FETCH_URL, WP_V2_ENDPOINT
} from '../../../utils/constants';

const wordCategoryRoutes = (server: Application, isDev: boolean) => {
  server.get('/word_category/:slug', async (request: Request, response: Response) => {
    const { slug } = request.params;
    const url = `${isDev ? DEV_FETCH_URL : PROD_FETCH_URL}/${WP_V2_ENDPOINT}/word_category?slug=${slug}&per_page=${ITEMS_PER_REQUEST}`;

    try {
      const tag = await fetch(url).then(res => res.json());
      response.status(200).send(tag);
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });

  server.get('/word_category_words/:slug', async (request: Request, response: Response) => {
    const { slug } = request.params;
    const url = `${isDev ? DEV_FETCH_URL : PROD_FETCH_URL}/${BETTER_REST_ENDPOINT}/word_category/${slug}?per_page=${ITEMS_PER_REQUEST}`;

    try {
      const tag = await fetch(url).then(res => res.json());
      response.status(200).send(tag);
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default wordCategoryRoutes;

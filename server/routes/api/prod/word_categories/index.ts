import { Application, Request, Response } from 'express';
import { PROD_FETCH_URL, WP_V2_ENDPOINT } from '../../../../utils/constants';

const wordCategoriesRoutes = (server: Application) => {
  server.get('/word_categories', async (request: Request, response: Response) => {
    const url = `${PROD_FETCH_URL}/${WP_V2_ENDPOINT}/word_category`;

    try {
      const wordCategories = await fetch(url).then(res => res.json());
      response.status(200).send(wordCategories);
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default wordCategoriesRoutes;

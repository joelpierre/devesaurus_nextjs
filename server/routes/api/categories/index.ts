import { Application, Request, Response } from 'express';
import { DEV_FETCH_URL, WP_V2_ENDPOINT, PROD_FETCH_URL } from '../../../utils/constants';

const categoriesRoutes = (server: Application, isDev: boolean) => {
  server.get('/categories', async (request: Request, response: Response) => {
    const url = `${isDev ? DEV_FETCH_URL : PROD_FETCH_URL}/${WP_V2_ENDPOINT}/categories`;

    try {
      const categories = await fetch(url).then(res => res.json());
      response.status(200).send(categories);
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default categoriesRoutes;

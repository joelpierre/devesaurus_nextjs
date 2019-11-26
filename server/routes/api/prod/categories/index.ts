import { Application, Request, Response } from 'express';
import { PROD_FETCH_URL, WP_V2_ENDPOINT } from '../../../../utils/constants';

const categoriesRoutes = (server: Application) => {
  server.get('/categories', async (request: Request, response: Response) => {
    const url = `${PROD_FETCH_URL}/${WP_V2_ENDPOINT}/categories`;

    try {
      const categories = await fetch(url).then(res => res.json());
      response.status(200).send(categories);
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default categoriesRoutes;

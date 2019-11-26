import { Application, Request, Response } from 'express';
import { BETTER_REST_ENDPOINT, PROD_FETCH_URL } from '../../../../utils/constants';

const categoryRoutes = (server: Application) => {
  server.get('/category/:slug', async (request: Request, response: Response) => {
    const { slug } = request.params;
    const url = `${PROD_FETCH_URL}/${BETTER_REST_ENDPOINT}/category/${slug}`;

    try {
      const category = await fetch(url).then(res => res.json());
      response.status(200).send(category);
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default categoryRoutes;

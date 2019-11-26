import { Application, Request, Response } from 'express';
import { BETTER_REST_ENDPOINT, DEV_FETCH_URL } from '../../../../utils/constants';

const tagRoutes = (server: Application) => {
  server.get('/tag/:slug', async (request: Request, response: Response) => {
    const { slug } = request.params;
    const url = `${DEV_FETCH_URL}/${BETTER_REST_ENDPOINT}/tag/${slug}`;

    try {
      const tag = await fetch(url).then(res => res.json());
      response.status(200).send(tag);
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default tagRoutes;

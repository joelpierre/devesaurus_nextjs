import { Application, Request, Response } from 'express';
import { BETTER_REST_ENDPOINT, DEV_FETCH_URL } from '../../../../utils/constants';
import { wordTransform } from './transform';

const wordRoutes = (server: Application) => {
  server.get('/word/:slug', async (request: Request, response: Response) => {
    const { slug } = request.params;
    const url = `${DEV_FETCH_URL}/${BETTER_REST_ENDPOINT}/word/${slug}`;

    try {
      const word = await fetch(url).then(res => res.json());
      response.status(200).send(wordTransform(word));
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default wordRoutes;

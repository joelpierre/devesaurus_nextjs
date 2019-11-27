import { Application, Request, Response } from 'express';
import { BETTER_REST_ENDPOINT, DEV_FETCH_URL, PROD_FETCH_URL } from '../../../utils/constants';
import wordsTransform from '../../../utils/transformers/words.transformer';

const wordsRoutes = (server: Application, isDev: boolean) => {
  server.get('/words', async (request: Request, response: Response) => {
    const url = `${isDev ? DEV_FETCH_URL : PROD_FETCH_URL}/${BETTER_REST_ENDPOINT}/word`;

    try {
      const words = await fetch(url).then(res => res.json());
      response.status(200).send(wordsTransform(words));
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default wordsRoutes;

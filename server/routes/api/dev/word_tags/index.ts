import { Application, Request, Response } from 'express';
import { DEV_FETCH_URL, WP_V2_ENDPOINT } from '../../../../utils/constants';

const wordTagsRoutes = (server: Application) => {
  server.get('/word_tags', async (request: Request, response: Response) => {
    const url = `${DEV_FETCH_URL}/${WP_V2_ENDPOINT}/word_tag`;

    try {
      const wordTags = await fetch(url).then(res => res.json());
      response.status(200).send(wordTags);
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default wordTagsRoutes;

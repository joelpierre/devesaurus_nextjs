import { Application, Request, Response } from 'express';

import {
  BETTER_REST_ENDPOINT,
  DEV_FETCH_URL,
  PROD_FETCH_URL,
} from '../../../utils/constants';
import {
  IPostAPIState,
  postTransform,
} from '../../../utils/transformers/post.transformer';

const postRoutes = (server: Application, isDev: boolean) => {
  server.get('/post/:slug', async (request: Request, response: Response) => {
    const { slug } = request.params;
    const url = `${
      isDev ? DEV_FETCH_URL : PROD_FETCH_URL
    }/${BETTER_REST_ENDPOINT}/post/${slug}`;

    try {
      const post: IPostAPIState = await fetch(url).then(res => res.json());
      response.status(200).send(postTransform(post));
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default postRoutes;

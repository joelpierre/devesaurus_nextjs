import { Application, Request, Response } from 'express';
import { BETTER_REST_ENDPOINT, DEV_FETCH_URL, PROD_FETCH_URL } from '../../../utils/constants';
import { IPostAPIState } from '../../../utils/transformers/post.transformer';
import postsTransform from '../../../utils/transformers/posts.transformer';

const postsRoutes = (server: Application, isDev: boolean) => {
  server.get('/posts', async (request: Request, response: Response) => {
    const url = `${isDev ? DEV_FETCH_URL : PROD_FETCH_URL}/${BETTER_REST_ENDPOINT}/posts`;

    try {
      const posts: IPostAPIState[] = await fetch(url).then(res => res.json());
      response.status(200).send(postsTransform(posts));
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default postsRoutes;

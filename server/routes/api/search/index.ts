import { Application, Request, Response } from 'express';
import {
  DEV_FETCH_URL,
  ITEMS_PER_REQUEST,
  PROD_FETCH_URL,
  WP_V2_ENDPOINT
} from '../../../utils/constants';
import { IPostAPIState } from '../../../utils/transformers/post.transformer';
import postsTransform from '../../../utils/transformers/posts.transformer';
import { IWordAPIState } from '../../../utils/transformers/word.transformer';
import wordsTransform from '../../../utils/transformers/words.transformer';

const searchRoutes = (server: Application, isDev: boolean) => {
  server.get('/search?*', async (request: Request, response: Response) => {
    const { type, term } = request.query;
    const url = `${isDev ? DEV_FETCH_URL : PROD_FETCH_URL}/${WP_V2_ENDPOINT}/search?subtype=${type}&search=${term}&per_page=${ITEMS_PER_REQUEST}`;

    const handleError = (error) => {
      response.status(error.res ? error.res.status : error.status ? error.status : 404).send(error);
    };

    try {
      const data = await fetch(url).then(res => res.json());
      let updateData;

      if (type === 'word') {
        updateData = wordsTransform(data as IWordAPIState[]);
      } else if (type === 'post') {
        updateData = postsTransform(data as IPostAPIState[]);
      } else {
        handleError({ status: 401, message: 'Please only search for "Words", or "Posts"' });
      }

      response.status(200).send(updateData);
    } catch (error) {
      handleError(error);
    }
  });
};

export default searchRoutes;

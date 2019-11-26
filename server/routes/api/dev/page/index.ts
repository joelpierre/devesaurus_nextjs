import { Application, Request, Response } from 'express';
import { BETTER_REST_ENDPOINT, DEV_FETCH_URL } from '../../../../utils/constants';
import pageTransform, { IPageAPIState } from './transform';

const pageRoutes = (server: Application) => {
  server.get('/page/:slug', async (request: Request, response: Response) => {
    const { slug } = request.params;
    const url = `${DEV_FETCH_URL}/${BETTER_REST_ENDPOINT}/page/${slug}`;

    try {
      const page: IPageAPIState = await fetch(url).then(res => res.json());
      response.status(200).send(pageTransform(page));
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default pageRoutes;

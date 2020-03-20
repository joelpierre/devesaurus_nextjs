import { Application, Request, Response } from 'express';

import {
  BETTER_REST_ENDPOINT,
  DEV_FETCH_URL,
  PROD_FETCH_URL,
} from '../../../utils/constants';
import menuTransform, {
  IMenuAPIState,
} from '../../../utils/transformers/menu.transformer';

const menuRoutes = (server: Application, isDev: boolean) => {
  server.get('/menus/:menu', async (request: Request, response: Response) => {
    const { menu } = request.params;
    const url = `${
      isDev ? DEV_FETCH_URL : PROD_FETCH_URL
    }/${BETTER_REST_ENDPOINT}/menus/${menu}`;

    try {
      const fetchedMenu: IMenuAPIState[] = await fetch(url).then(res =>
        res.json()
      );
      response.status(200).send(menuTransform(fetchedMenu));
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });
};

export default menuRoutes;

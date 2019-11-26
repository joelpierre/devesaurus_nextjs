import { Application, Request, Response } from 'express';
import { BETTER_REST_ENDPOINT, PROD_FETCH_URL } from '../../../../utils/constants';

const coreRoutes = (server: Application) => {
  server.get('/options/acf', async (request: Request, response: Response) => {
    const url = `${PROD_FETCH_URL}/${BETTER_REST_ENDPOINT}/options/acf`;

    try {
      const options = await fetch(url).then(res => res.json());
      response.status(200).send(options);
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });

  server.get('/menus/:menu', async (request: Request, response: Response) => {
    const { menu } = request.params;
    const url = `${PROD_FETCH_URL}/${BETTER_REST_ENDPOINT}/menus/${menu}`;

    try {
      const fetchedMenu = await fetch(url).then(res => res.json());
      response.status(200).send(fetchedMenu);
    } catch (error) {
      response.status(error.res ? error.res.status : 404).send(error);
    }
  });

};

export default coreRoutes;

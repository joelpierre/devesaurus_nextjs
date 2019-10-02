import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';
import pageTransform from './transform';
import { AxiosError } from 'axios';

export interface IPageStoreState {
  id: number;
  title: string;
  slug: string;
  date: string;
  date_modified: string;
  excerpt: string;
  content: string;
  author: string;
  yoast: Core.IYoastMeta;
  acf: Core.IAcfComponents;
  error?: Core.IErrorResponse | AxiosError;
}

const initialState = {};

const pageReducer = (
  state = initialState as IPageStoreState,
  action: AnyAction
): IPageStoreState => {
  let updatedState;

  switch (action.type) {
    case actions.GET_PAGE_SUCCESS:
      updatedState = pageTransform(action.payload);
      return updateObject(state, updatedState);

    case actions.GET_PAGE_FAILED:
      return { ...action.payload };

    case actions.CLEAR_PAGE:
      return {} as any;

    default:
      return state;
  }
};

export default pageReducer;

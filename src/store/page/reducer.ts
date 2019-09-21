import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';
import pageTransform from './transform';

export interface IPageStoreState {
  id: number;
  title: string;
  slug: string;
  date: string;
  date_modified: string;
  excerpt: string;
  content: string;
  author: string;
  yoast_meta: Core.IYoastMeta;
  acf: Core.IAcfComponents;
}

const initialState = {};

const pageReducer = (
  state: IPageStoreState = initialState as any,
  action: AnyAction
): IPageStoreState => {
  let updatedState;

  switch (action.type) {
    case actions.GET_PAGE_SUCCESS:
      updatedState = pageTransform(action.payload);
      return updateObject(state, updatedState);

    case actions.GET_PAGE_FAILED:
      return { ...action.payload };

    default:
      return state;
  }
};

export default pageReducer;

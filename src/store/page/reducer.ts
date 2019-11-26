import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';
import { TReduxError } from '@jpp/typings/index';

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
  acf: Core.IAcfComponentCore;
  error?: TReduxError;
}

const initialState = {
  yoast: {} as Core.IYoastMeta,
  acf: {} as Core.IAcfComponentCore
};

const pageReducer = (
  state = initialState as IPageStoreState,
  action: AnyAction
): IPageStoreState => {
  switch (action.type) {
    case actions.GET_PAGE_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_PAGE_FAILED:
      return { ...action.payload };

    case actions.CLEAR_PAGE:
      return {} as any;

    default:
      return state;
  }
};

export default pageReducer;

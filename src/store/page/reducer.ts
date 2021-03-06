import { AnyAction } from 'redux';

import { TReduxError } from '@jpp/typings/index';

import { updateObject } from '../../utils';
import * as actions from './constants';

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
  acf: Core.IAcfCore;
  error?: TReduxError;
}

const initialState = {
  yoast: {} as Core.IYoastMeta,
  acf: {} as Core.IAcfCore,
} as IPageStoreState;

export const pageReducer = (
  state = initialState,
  action: AnyAction
): IPageStoreState => {
  switch (action.type) {
    case actions.GET_PAGE_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_PAGE_FAILED:
      return action.payload;

    case actions.CLEAR_PAGE:
      return initialState;

    default:
      return state;
  }
};

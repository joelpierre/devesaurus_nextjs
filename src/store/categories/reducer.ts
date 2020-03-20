import { AnyAction } from 'redux';

import { TReduxError } from '@jpp/typings/index';

import * as actions from './constants';

export interface ICategoryStoreState {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  taxonomy: Core.ETaxonomy;
  yoast: Core.IYoastMeta;
  error?: TReduxError;
}

export type TCategoriesStoreState = ICategoryStoreState[] | TReduxError;

const initialState = [] as ICategoryStoreState[];

export const categoriesReducer = (
  state = initialState,
  action: AnyAction
): TCategoriesStoreState => {
  switch (action.type) {
    case actions.GET_CATEGORIES_SUCCESS:
    case actions.GET_CATEGORIES_FAILED:
      return action.payload;

    case actions.CLEAR_CATEGORIES:
      return initialState;

    default:
      return state;
  }
};

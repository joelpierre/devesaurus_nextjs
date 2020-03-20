import { AnyAction } from 'redux';

import { TReduxError } from '@jpp/typings/index';

import { updateObject } from '../../utils';
import * as actions from './constants';

export interface IPostStoreState {
  id: number;
  title: string;
  slug: string;
  date: string;
  date_modified: string;
  excerpt: string;
  content: string;
  author: string;
  yoast: Core.IYoastMeta;
  categories: Core.ITaxonomyTerm[];
  tags: Core.ITaxonomyTerm[];
  acf: Core.IAcfCore;
  error?: TReduxError;
}

const initialState = {
  yoast: {} as Core.IYoastMeta,
  acf: {} as Core.IAcfCore,
  categories: [] as Core.ITaxonomyTerm[],
  tags: [] as Core.ITaxonomyTerm[],
} as IPostStoreState;

export const postReducer = (
  state = initialState,
  action: AnyAction
): IPostStoreState => {
  switch (action.type) {
    case actions.GET_POST_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_POST_FAILED:
      return action.payload;

    case actions.CLEAR_POST:
      return initialState;

    default:
      return state;
  }
};

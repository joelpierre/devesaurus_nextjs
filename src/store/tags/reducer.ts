import { AnyAction } from 'redux';

import { TReduxError } from '@jpp/typings/index';

import * as actions from './constants';

export interface ITagStoreState {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  taxonomy: string;
  yoast: Core.IYoastMeta;
  error?: TReduxError;
}

export type TTagsStoreState = ITagStoreState[] | TReduxError;

const initialState = [] as ITagStoreState[];

export const tagsReducer = (
  state = initialState,
  action: AnyAction
): TTagsStoreState => {
  switch (action.type) {
    case actions.GET_TAGS_SUCCESS:
    case actions.GET_TAGS_FAILED:
      return action.payload;

    case actions.CLEAR_TAGS:
      return initialState;

    default:
      return state;
  }
};

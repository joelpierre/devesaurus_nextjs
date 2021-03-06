import { AnyAction } from 'redux';

import { TReduxError } from '@jpp/typings/index';

import { updateArray } from '../../utils';
import { IWordStoreState } from '../word/reducer';
import * as actions from './constants';

export interface IWordTagStoreState {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  taxonomy: string;
  yoast: Core.IYoastMeta;
  error?: TReduxError;
  words: IWordStoreState[];
}

export type TWordTagsStoreState = IWordTagStoreState[] | TReduxError;

const initialState = [] as IWordTagStoreState[];

export const wordTagsReducer = (
  state = initialState,
  action: AnyAction
): TWordTagsStoreState => {
  switch (action.type) {
    case actions.GET_WORD_TAGS_SUCCESS:
      return updateArray(state, action.payload);

    case actions.GET_WORD_TAGS_FAILED:
      return action.payload;

    case actions.CLEAR_WORD_TAGS:
      return initialState;

    default:
      return state;
  }
};

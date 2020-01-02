import * as actions from './constants';
import { AnyAction } from 'redux';
import { TReduxError } from '@jpp/typings/index';
import { updateArray } from '../../utils';

export interface IWordTagStoreState {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  taxonomy: string;
  yoast: Core.IYoastMeta;
  error?: TReduxError;
}

export type TWordTagStoreState = IWordTagStoreState[] | TReduxError;

const initialState = [] as IWordTagStoreState[];

export const wordTagReducer = (
  state = initialState,
  action: AnyAction
): TWordTagStoreState => {
  switch (action.type) {
    case actions.GET_WORD_TAGS_SUCCESS:
      return updateArray(state, action.payload);

    case actions.GET_WORD_TAGS_FAILED:
      return { ...action.payload };

    default:
      return state;
  }
};

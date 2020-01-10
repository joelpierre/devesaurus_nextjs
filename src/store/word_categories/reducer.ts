import { IWordStoreState } from '../word/reducer';
import * as actions from './constants';
import { AnyAction } from 'redux';
import { TReduxError } from '@jpp/typings/index';
import { updateArray } from '../../utils';

export interface IWordCategoryStoreState {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  taxonomy: string;
  yoast: Core.IYoastMeta;
  words: IWordStoreState[];
  error?: TReduxError;
}

export type TWordCategoriesStoreState = IWordCategoryStoreState[] | TReduxError;

const initialState = [] as IWordCategoryStoreState[];

export const wordCategoriesReducer = (
  state = initialState,
  action: AnyAction
): TWordCategoriesStoreState => {
  switch (action.type) {
    case actions.GET_WORD_CATEGORIES_SUCCESS:
      return updateArray(state, action.payload);

    case actions.GET_WORD_CATEGORIES_FAILED:
      return { ...action.payload };

    default:
      return state;
  }
};

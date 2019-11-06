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
  error?: TReduxError;
}

export type TWordCategoryStoreState = IWordCategoryStoreState[] | TReduxError;

const initialState = [] as IWordCategoryStoreState[];

const wordCategoriesReducer = (
  state = initialState,
  action: AnyAction
): TWordCategoryStoreState => {
  switch (action.type) {
    case actions.GET_WORD_CATEGORIES_SUCCESS:
      return updateArray(state, action.payload);

    case actions.GET_WORD_CATEGORIES_FAILED:
      return { ...action.payload };

    default:
      return state;
  }
};

export default wordCategoriesReducer;

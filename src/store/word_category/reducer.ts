import { AnyAction } from 'redux';

import { updateObject } from '../../utils';
import { IWordStoreState } from '../word/reducer';
import { IWordCategoryStoreState } from '../word_categories/reducer';
import * as actions from './constants';

const initialState = {
  words: [] as IWordStoreState[],
} as IWordCategoryStoreState;

export const wordCategoryReducer = (
  state = initialState,
  action: AnyAction
): IWordCategoryStoreState => {
  let payload;

  switch (action.type) {
    case actions.GET_WORD_CATEGORY_SUCCESS:
      payload = Array.isArray(action.payload)
        ? action.payload[0]
        : action.payload;
      return updateObject(state, payload);

    case actions.GET_WORD_CATEGORY_FAILED:
      return action.payload;

    case actions.GET_WORD_CATEGORY_WORDS_SUCCESS:
    case actions.GET_WORD_CATEGORY_WORDS_FAILED:
      return updateObject(state, { words: action.payload });

    case actions.CLEAR_WORD_CATEGORY:
      return initialState;

    default:
      return state;
  }
};

import { AnyAction } from 'redux';

import { TReduxError } from '@jpp/typings/index';

import { updateObject } from '../../utils';
import { IWordStoreState } from '../word/reducer';
import * as actions from './constants';

export interface IWordsStoreState {
  allWords: TWordsStoreState;
  featuredWords: TWordsStoreState;
}

export type TWordsStoreState = IWordStoreState[] | TReduxError;

const initialState = {
  allWords: [] as TWordsStoreState,
  featuredWords: [] as TWordsStoreState,
};

export const wordsReducer = (
  state = initialState,
  action: AnyAction
): IWordsStoreState => {
  switch (action.type) {
    case actions.GET_WORDS_SUCCESS:
    case actions.GET_WORDS_FAILED:
      return updateObject(state, { allWords: action.payload });

    case actions.GET_FEATURED_WORDS_SUCCESS:
    case actions.GET_FEATURED_WORDS_FAILED:
      return updateObject(state, { featuredWords: action.payload });

    case actions.CLEAR_WORDS:
      return updateObject(state, { allWords: initialState.allWords });

    case actions.CLEAR_FEATURED_WORDS:
      return updateObject(state, { featuredWords: initialState.featuredWords });

    default:
      return state;
  }
};

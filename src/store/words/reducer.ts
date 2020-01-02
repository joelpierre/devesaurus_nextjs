import { AnyAction } from 'redux';
import { TReduxError } from '@jpp/typings/index';
import * as actions from './constants';
import { IWordStoreState } from '../word/reducer';
import { updateArray } from '../../utils';

const initialState = [];

export type TWordsStoreState = IWordStoreState[] | TReduxError;

export const wordsReducer = (
  state = initialState as IWordStoreState[],
  action: AnyAction
): TWordsStoreState => {
  switch (action.type) {
    case actions.GET_WORDS_SUCCESS:
      return updateArray(state, action.payload);

    case actions.GET_WORDS_FAILED:
      return { ...action.payload };

    case actions.CLEAR_WORDS:
      return initialState;

    default:
      return state;
  }
};

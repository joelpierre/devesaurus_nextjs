import * as actions from './constants';
import { AnyAction } from 'redux';
import { IWordStoreState } from '../word/reducer';
import { wordsTransform } from '../word/transform';
import { updateArray } from '../../utils';
import { TReduxError } from '@jpp/typings/index';

const initialState = [];

export type TWordsStoreState = IWordStoreState[] | TReduxError;

const wordsReducer = (
  state = initialState as IWordStoreState[],
  action: AnyAction
): TWordsStoreState => {
  switch (action.type) {
    case actions.GET_WORDS_SUCCESS:
      return updateArray(state, wordsTransform(action.payload));

    case actions.GET_WORDS_FAILED:
      return { ...action.payload };

    case actions.CLEAR_WORDS:
      return initialState;

    default:
      return state;
  }
};

export default wordsReducer;

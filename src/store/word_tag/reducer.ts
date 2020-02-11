import { IWordTagStoreState } from '../word_tags/reducer';
import * as actions from './constants';
import { AnyAction } from 'redux';
import { updateObject } from '../../utils';
import { IWordStoreState } from '../word/reducer';

const initialState = {
  words: [] as IWordStoreState[]
} as IWordTagStoreState;

export const wordTagReducer = (
  state = initialState,
  action: AnyAction
): IWordTagStoreState => {
  switch (action.type) {
    case actions.GET_WORD_TAG_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_WORD_TAG_FAILED:
      return action.payload;

    case actions.CLEAR_WORD_TAG:
      return initialState;

    default:
      return state;
  }
};

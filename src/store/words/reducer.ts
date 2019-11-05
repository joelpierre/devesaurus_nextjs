import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';
import { IWordStoreState } from '../word/reducer';

const initialState = [];

const wordsReducer = (
  state = initialState as IWordStoreState[],
  action: AnyAction
): IWordStoreState[] => {
  switch (action.type) {
    case actions.GET_WORDS_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_WORDS_FAILED:
      return { ...action.payload };

    case actions.CLEAR_WORDS:
      return [] as any;

    default:
      return state;
  }
};

export default wordsReducer;

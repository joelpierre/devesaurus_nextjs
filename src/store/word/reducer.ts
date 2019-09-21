import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';

export interface IWordStoreState {
  id: number;
  title: string;
  slug: string;
}

const initialState = {};

const wordReducer = (
  state = initialState as IWordStoreState,
  action: AnyAction
): IWordStoreState => {
  switch (action.type) {
    case actions.GET_WORD:
      return updateObject(state, action.payload);

    case actions.GET_WORD_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_WORD_FAILED:
      return { ...action.payload };

    default:
      return state;
  }
};

export default wordReducer;

import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';

export interface IWordStoreState {
}

const initialState: IWordStoreState = {
};

const wordReducer = (
  state = initialState,
  action: AnyAction
): IWordStoreState => {
  switch (action.type) {
    case actions.GET_WORD:
      return updateObject(state, action.payload);

    case actions.GET_WORD_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_WORD_FAILED:
      return updateObject(state, action.payload);

    default:
      return state;
  }
};

export default wordReducer;

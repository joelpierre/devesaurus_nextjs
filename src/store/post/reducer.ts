import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';

export interface IPostStoreState {
}

const initialState: IPostStoreState = {
};

const postReducer = (
  state = initialState,
  action: AnyAction
): IPostStoreState => {
  switch (action.type) {
    case actions.GET_POST:
      return updateObject(state, action.payload);

    case actions.GET_POST_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_POST_FAILED:
      return updateObject(state, action.payload);

    default:
      return state;
  }
};

export default postReducer;

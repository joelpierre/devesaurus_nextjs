import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';

export interface IPostStoreState {
  id: number;
  title: string;
  slug: string;
}

const initialState = {};

const postReducer = (
  state = initialState as IPostStoreState,
  action: AnyAction
): IPostStoreState => {
  switch (action.type) {
    case actions.GET_POST:
      return updateObject(state, action.payload);

    case actions.GET_POST_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_POST_FAILED:
      return { ...action.payload };

    default:
      return state;
  }
};

export default postReducer;

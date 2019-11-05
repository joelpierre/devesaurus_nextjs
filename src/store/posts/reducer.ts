import { AnyAction } from 'redux';
import * as actions from './constants';
import { updateObject } from '../../utils';
import { IPostStoreState } from '../post/reducer';

const initialState = [];

const postsReducer = (
  state = initialState as IPostStoreState[],
  action: AnyAction
): IPostStoreState[] => {
  switch (action.type) {
    case actions.GET_POSTS_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_POSTS_FAILED:
      return { ...action.payload };

    case actions.CLEAR_POSTS:
      return [] as any;

    default:
      return state;
  }
};

export default postsReducer;

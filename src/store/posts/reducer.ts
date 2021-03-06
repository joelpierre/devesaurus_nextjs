import { AnyAction } from 'redux';

import { TReduxError } from '@jpp/typings/index';

import { IPostStoreState } from '../post/reducer';
import * as actions from './constants';

const initialState = [] as IPostStoreState[];

export type TPostsStoreState = IPostStoreState[] | TReduxError;

export const postsReducer = (
  state = initialState,
  action: AnyAction
): TPostsStoreState => {
  switch (action.type) {
    case actions.GET_POSTS_SUCCESS:
    case actions.GET_POSTS_FAILED:
      return action.payload;

    case actions.CLEAR_POSTS:
      return initialState;

    default:
      return state;
  }
};

import { AnyAction } from 'redux';
import * as actions from './constants';
import { IPostStoreState } from '../post/reducer';
import { postsTransform } from '../post/transform';
import { TReduxError } from '@jpp/typings/index';
import { updateArray } from '../../utils';

const initialState = [] as IPostStoreState[];

export type TPostsStoreState = IPostStoreState[] | TReduxError;

const postsReducer = (
  state = initialState,
  action: AnyAction
): TPostsStoreState => {
  switch (action.type) {
    case actions.GET_POSTS_SUCCESS:
      return updateArray(state, postsTransform(action.payload));

    case actions.GET_POSTS_FAILED:
      return { ...action.payload };

    case actions.CLEAR_POSTS:
      return initialState;

    default:
      return state;
  }
};

export default postsReducer;

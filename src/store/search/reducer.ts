import { AnyAction } from 'redux';
import { IPostStoreState } from '../post/reducer';
import * as actions from './constants';
import { IWordStoreState } from '../word/reducer';
import { updateArray } from '../../utils/index';

export interface ISearchStoreState {
  words: IWordStoreState[];
  posts: IPostStoreState[];
}

const initialState: ISearchStoreState = {
  words: [] as IWordStoreState[],
  posts: [] as IPostStoreState[]
};

export const searchReducer = (
  state = initialState as ISearchStoreState,
  action: AnyAction
): ISearchStoreState => {
  switch (action.type) {
    case actions.GET_POST_SEARCH_RESULTS_SUCCESS:
      return { posts: updateArray(state.posts, action.payload), words: state.words };

    case actions.GET_POST_SEARCH_RESULTS_FAILED:
      return { posts: { ...action.payload }, words: state.words };

    case actions.CLEAR_POST_SEARCH_RESULTS:
      return { posts: initialState.posts, words: state.words };

    case actions.GET_WORD_SEARCH_RESULTS_SUCCESS:
      return { posts: state.posts, words: updateArray(state.words, action.payload) };

    case actions.GET_WORD_SEARCH_RESULTS_FAILED:
      return { posts: state.posts, words: { ...action.payload } };

    case actions.CLEAR_WORD_SEARCH_RESULTS:
      return { posts: state.posts, words: initialState.words };

    default:
      return state;
  }
};

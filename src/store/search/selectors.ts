import { IReduxState } from '../createStore';
import { IPostStoreState } from '../post/reducer';
import { IWordStoreState } from '../word/reducer';
import { ISearchStoreState } from './reducer';

export const getSearchFromState = (state: IReduxState): ISearchStoreState => {
  return state && state.search;
};

export const getSearchPostsFromState = (
  state: IReduxState
): IPostStoreState[] => {
  const search = getSearchFromState(state);
  const posts = search.posts;

  if (Array.isArray(posts)) {
    return posts;
  }

  return [] as IPostStoreState[];
};

export const getSearchWordsFromState = (
  state: IReduxState
): IWordStoreState[] => {
  const search = getSearchFromState(state);
  const words = search.words;

  if (Array.isArray(words)) {
    return words;
  }

  return [] as IWordStoreState[];
};

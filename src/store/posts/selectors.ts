import { IReduxState } from '../createStore';
import { IPostStoreState } from '../post/reducer';

export const getPostsFromState = (state: IReduxState): IPostStoreState[] => {
  const posts = state && state.posts;

  if (Array.isArray(posts)) {
    return posts;
  }

  return [] as IPostStoreState[];
};

import { IPostStoreState } from '../../../../../src/store/post/reducer';
import { IPostAPIState, postTransform } from '../post/transform';

export const postsTransform = (posts: IPostAPIState[]): IPostStoreState[] => {
  return posts.map(post => {
    return postTransform(post);
  });
};

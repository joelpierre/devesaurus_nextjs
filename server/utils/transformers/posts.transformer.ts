import { IPostStoreState } from '../../../src/store/post/reducer';
import postTransform, { IPostAPIState } from './post.transformer';

export const postsTransform = (posts: IPostAPIState[]): IPostStoreState[] => {
  return posts.map(post => {
    return postTransform(post);
  });
};

export default postsTransform;

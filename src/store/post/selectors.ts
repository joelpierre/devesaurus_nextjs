import { IReduxState } from '../createStore';
import { IPostStoreState } from './reducer';

export const getPostFromState = (state: IReduxState): IPostStoreState => {
  return state && state.post;
};

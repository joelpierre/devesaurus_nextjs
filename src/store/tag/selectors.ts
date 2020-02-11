import { IReduxState } from '../createStore';
import { ITagStoreState } from '../tags/reducer';

export const getTagFromState = (state: IReduxState): ITagStoreState => {
  return state && state.tag;
};

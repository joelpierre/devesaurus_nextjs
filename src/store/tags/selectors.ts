import { IReduxState } from '../createStore';
import { ITagStoreState } from './reducer';

export const getTagsFromState = (state: IReduxState): ITagStoreState[] => {
  const tags = state && state.tags;
  if (Array.isArray(tags)) {
    return tags;
  }

  return [] as ITagStoreState[];
};

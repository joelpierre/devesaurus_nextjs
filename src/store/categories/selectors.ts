import { IReduxState } from '../createStore';
import { ICategoryStoreState } from './reducer';

export const getCategoriesFromState = (state: IReduxState): ICategoryStoreState[] => {
  const categories = state && state.categories;
  if (Array.isArray(categories)) {
    return categories;
  }

  return [] as ICategoryStoreState[];
};

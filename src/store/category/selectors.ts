import { IReduxState } from '../createStore';
import { ICategoryStoreState } from '../categories/reducer';

export const getCategoryFromState = (state: IReduxState): ICategoryStoreState => {
  return state && state.category;
};

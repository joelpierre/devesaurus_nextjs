import { ICategoryStoreState } from '../categories/reducer';
import { IReduxState } from '../createStore';

export const getCategoryFromState = (
  state: IReduxState
): ICategoryStoreState => {
  return state && state.category;
};

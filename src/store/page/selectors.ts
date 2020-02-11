import { IReduxState } from '../createStore';
import { IPageStoreState } from './reducer';

export const getPageFromState = (state: IReduxState): IPageStoreState => {
  return state && state.page;
};

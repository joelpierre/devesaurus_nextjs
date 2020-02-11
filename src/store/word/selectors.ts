import { IReduxState } from '../createStore';
import { IWordStoreState } from './reducer';

export const getWordFromState = (state: IReduxState): IWordStoreState => {
  return state && state.word;
};

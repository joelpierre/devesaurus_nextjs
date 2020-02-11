import { IReduxState } from '../createStore';
import { IWordTagStoreState } from '../word_tags/reducer';

export const getWordTagFromState = (state: IReduxState): IWordTagStoreState => {
  return state && state.word_tag;
};

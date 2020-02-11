import { IReduxState } from '../createStore';
import { IWordCategoryStoreState } from '../word_categories/reducer';

export const getWordCategoryFromState = (state: IReduxState): IWordCategoryStoreState => {
  return state && state.word_category;
};

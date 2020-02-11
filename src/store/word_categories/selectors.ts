import { IReduxState } from '../createStore';
import { IWordCategoryStoreState } from './reducer';

export const getWordCategoriesFromState = (state: IReduxState): IWordCategoryStoreState[] => {
  const wordCategories = state && state.word_categories;
  if (Array.isArray(wordCategories)) {
    return wordCategories;
  }

  return [] as IWordCategoryStoreState[];
};

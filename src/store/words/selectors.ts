import { IReduxState } from '../createStore';
import { IWordStoreState } from '../word/reducer';

export const getFeaturedWordsFromState = (state: IReduxState): IWordStoreState[] => {
  const featuredWords = state.words && state.words.featuredWords;

  if (Array.isArray(featuredWords)) {
    return featuredWords;
  }

  return [] as IWordStoreState[];
};

export const getWordsFromState = (state: IReduxState) => {
  const words = state.words && state.words.allWords;

  if (Array.isArray(words)) {
    return words;
  }

  return [] as IWordStoreState[];
};

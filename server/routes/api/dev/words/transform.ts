import { IWordStoreState } from '../../../../../src/store/word/reducer';
import { IWordAPIState, wordTransform } from '../word/transform';

export const wordsTransform = (words: IWordAPIState[]): IWordStoreState[] => {
  return words.map(word => {
    return wordTransform(word);
  });
};

import { IWordStoreState } from '../../../src/store/word/reducer';
import wordTransform, { IWordAPIState } from './word.transformer';

export const wordsTransform = (words: IWordAPIState[]): IWordStoreState[] => {
  return words.map(word => {
    return wordTransform(word);
  });
};

export default wordsTransform;

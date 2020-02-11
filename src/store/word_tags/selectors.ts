import { IReduxState } from '../createStore';
import { IWordTagStoreState } from './reducer';

export const getWordTagsFromState = (state: IReduxState): IWordTagStoreState[] => {
  const wordTags = state && state.word_tags;
  if (Array.isArray(wordTags)) {
    return wordTags;
  }

  return [] as IWordTagStoreState[];
};

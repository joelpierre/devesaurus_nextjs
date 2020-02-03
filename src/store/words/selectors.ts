import { IReduxState } from '../createStore';

export const getFeaturedWordsFromState = (state: IReduxState) => {
  return state.words && state.words.featuredWords;
};

export const getWordsFromState = (state: IReduxState) => {
  return state.words && state.words.allWords;
};

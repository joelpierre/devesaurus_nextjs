import { combineReducers, Reducer } from 'redux';
import { IReduxState } from './createStore';
import pageReducer from './page/reducer';
import coreReducer from './core/reducer';
import postReducer from './post/reducer';
import wordReducer from './word/reducer';
import tagReducer from './tags/reducer';
import categoryReducer from './categories/reducer';
import wordTagReducer from './word_tags/reducer';
import wordCategoriesReducer from './word_categories/reducer';
import wordsReducer from './words/reducer';
import postsReducer from './posts/reducer';

/**
 * Root Reducer
 */
export const rootReducer: Reducer<IReduxState> = combineReducers<IReduxState>({
  page: pageReducer,
  core: coreReducer,
  post: postReducer,
  posts: postsReducer,
  tags: tagReducer,
  categories: categoryReducer,
  word: wordReducer,
  words: wordsReducer,
  word_tags: wordTagReducer,
  word_categories: wordCategoriesReducer
});

export default rootReducer;

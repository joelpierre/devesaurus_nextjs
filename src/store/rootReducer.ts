import { combineReducers, Reducer } from 'redux';

import { categoriesReducer } from './categories/reducer';
import { categoryReducer } from './category/reducer';
import { coreReducer } from './core/reducer';
import { IReduxState } from './createStore';
import { pageReducer } from './page/reducer';
import { postReducer } from './post/reducer';
import { postsReducer } from './posts/reducer';
import { searchReducer } from './search/reducer';
import { tagReducer } from './tag/reducer';
import { tagsReducer } from './tags/reducer';
import { wordReducer } from './word/reducer';
import { wordsReducer } from './words/reducer';
import { wordCategoriesReducer } from './word_categories/reducer';
import { wordCategoryReducer } from './word_category/reducer';
import { wordTagReducer } from './word_tag/reducer';
import { wordTagsReducer } from './word_tags/reducer';

/**
 * Root Reducer
 */
export const rootReducer: Reducer<IReduxState> = combineReducers<IReduxState>({
  page: pageReducer,
  core: coreReducer,
  post: postReducer,
  posts: postsReducer,
  tag: tagReducer,
  tags: tagsReducer,
  category: categoryReducer,
  categories: categoriesReducer,
  word: wordReducer,
  words: wordsReducer,
  word_tag: wordTagReducer,
  word_tags: wordTagsReducer,
  word_category: wordCategoryReducer,
  word_categories: wordCategoriesReducer,
  search: searchReducer,
});

export default rootReducer;

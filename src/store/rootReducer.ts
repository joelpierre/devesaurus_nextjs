import { combineReducers, Reducer } from 'redux';
import { categoryReducer } from './category/reducer';
import { IReduxState } from './createStore';
import { pageReducer } from './page/reducer';
import { coreReducer } from './core/reducer';
import { postReducer } from './post/reducer';
import { searchReducer } from './search/reducer';
import { tagReducer } from './tag/reducer';
import { wordReducer } from './word/reducer';
import { tagsReducer } from './tags/reducer';
import { categoriesReducer } from './categories/reducer';
import { wordCategoryReducer } from './word_category/reducer';
import { wordTagReducer } from './word_tag/reducer';
import { wordTagsReducer } from './word_tags/reducer';
import { wordCategoriesReducer } from './word_categories/reducer';
import { wordsReducer } from './words/reducer';
import { postsReducer } from './posts/reducer';

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
  search: searchReducer
});

export default rootReducer;

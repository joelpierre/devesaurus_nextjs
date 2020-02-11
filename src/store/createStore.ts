import { TFuncValueVoid, TFuncVoid } from '@jpp/typings/index';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

import { ICoreStoreState } from './core/reducer';
import { IPageStoreState } from './page/reducer';
import { IPostStoreState } from './post/reducer';
import { ISearchStoreState } from './search/reducer';
import { IWordStoreState } from './word/reducer';
import { ITagStoreState, TTagsStoreState } from './tags/reducer';
import { ICategoryStoreState, TCategoriesStoreState } from './categories/reducer';
import { IWordTagStoreState, TWordTagsStoreState } from './word_tags/reducer';
import { IWordCategoryStoreState, TWordCategoriesStoreState } from './word_categories/reducer';
import { TPostsStoreState } from './posts/reducer';
import { IWordsStoreState, TWordsStoreState } from './words/reducer';
import ConfigProvider from '../services/configProvider';

export interface IReduxState {
  core: ICoreStoreState;
  page: IPageStoreState;
  posts: TPostsStoreState;
  post: IPostStoreState;
  tag: ITagStoreState;
  tags: TTagsStoreState;
  category: ICategoryStoreState;
  categories: TCategoriesStoreState;
  words: IWordsStoreState;
  word: IWordStoreState;
  word_tag: IWordTagStoreState;
  word_tags: TWordTagsStoreState;
  word_categories: TWordCategoriesStoreState;
  word_category: IWordCategoryStoreState;
  search: ISearchStoreState;
}

export interface IReduxDispatch {
  onSetMenuState: TFuncValueVoid<boolean>;
  onSetAppLoading: TFuncValueVoid<boolean>;
  onSetAppError: TFuncValueVoid<boolean>;
  onGetSiteMeta: () => ICoreStoreState;
  onGetPage: (slug: string) => IPageStoreState;
  onGetPost: (slug: string) => IPostStoreState;
  onGetPosts: () => TPostsStoreState;
  onGetCategoryPosts: () => TPostsStoreState;
  onGetTagPosts: () => TPostsStoreState;
  onGetCategories: () => TCategoriesStoreState;
  onGetWords: () => TWordsStoreState;
  onGetFeaturedWords: () => TWordsStoreState;
  onGetCategoryWords: () => TWordsStoreState;
  onGetTagWords: () => TWordsStoreState;
  onGetWord: (slug: string) => IWordStoreState;
  onClearPage: TFuncVoid;
  onClearCategory: TFuncVoid;
  onClearCategories: TFuncVoid;
  onClearTag: TFuncVoid;
  onClearTags: TFuncVoid;
  onClearWordCategory: TFuncVoid;
  onClearWordCategories: TFuncVoid;
  onClearWordTag: TFuncVoid;
  onClearWordTags: TFuncVoid;
  onClearPost: TFuncVoid;
  onClearPosts: TFuncVoid;
  onClearWord: TFuncVoid;
  onClearWords: TFuncVoid;
  onClearFeaturedWords: TFuncVoid;
  onWordSearch: TFuncVoid;
  onPostSearch: TFuncVoid;
}

export type TReduxProps = IReduxState & IReduxDispatch;

/**
 * Configure Store for Application
 * @returns {any}
 */
const makeStore = (initialState = {} as IReduxState): Store => {
  if (ConfigProvider.getValue('NODE_ENV') === 'production') {
    return createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));
  }

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default makeStore;

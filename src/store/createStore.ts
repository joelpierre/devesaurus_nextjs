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
import { TWordsStoreState } from './words/reducer';
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
  words: TWordsStoreState;
  word: IWordStoreState;
  word_tag: IWordTagStoreState;
  word_tags: TWordTagsStoreState;
  word_categories: TWordCategoriesStoreState;
  word_category: IWordCategoryStoreState;
  search: ISearchStoreState;
}

export interface IReduxDispatch {
  onSetMenuState: (value: boolean) => void;
  onSetAppLoading: (value: boolean) => void;
  onSetAppError: (value: boolean) => void;
  onGetSiteMeta: () => ICoreStoreState;
  onGetPage: (slug: string) => IPageStoreState;
  onGetPost: (slug: string) => IPostStoreState;
  onGetPosts: () => TPostsStoreState;
  onGetCategoryPosts: () => TPostsStoreState;
  onGetTagPosts: () => TPostsStoreState;
  onGetCategories: () => TCategoriesStoreState;
  onGetWords: () => TWordsStoreState;
  onGetCategoryWords: () => TWordsStoreState;
  onGetTagWords: () => TWordsStoreState;
  onGetWord: (slug: string) => IWordStoreState;
  onClearPage: () => void;
  onClearCategory: () => void;
  onClearCategories: () => void;
  onClearTag: () => void;
  onClearTags: () => void;
  onClearWordCategory: () => void;
  onClearWordCategories: () => void;
  onClearWordTag: () => void;
  onClearWordTags: () => void;
  onClearPost: () => void;
  onClearPosts: () => void;
  onClearWord: () => void;
  onClearWords: () => void;
  onWordSearch: () => void;
  onPostSearch: () => void;
}

export type TReduxProps = IReduxState & IReduxDispatch;

/**
 * Configure Store for Application
 * @returns {any}
 */
const makeStore = (initialState = {}): Store => {
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

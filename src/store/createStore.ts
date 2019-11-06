import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

import { ICoreStoreState } from './core/reducer';
import { IPageStoreState } from './page/reducer';
import { IPostStoreState } from './post/reducer';
import { IWordStoreState } from './word/reducer';
import { TTagStoreState } from './tags/reducer';
import { TCategoryStoreState } from './categories/reducer';
import { TWordTagStoreState } from './word_tags/reducer';
import { TWordCategoryStoreState } from './word_categories/reducer';
import { TPostsStoreState } from './posts/reducer';
import { TWordsStoreState } from './words/reducer';
import ConfigProvider from '../services/configProvider';

export interface IReduxState {
  core: ICoreStoreState;
  page: IPageStoreState;
  posts: TPostsStoreState;
  post: IPostStoreState;
  tags: TTagStoreState;
  categories: TCategoryStoreState;
  words: TWordsStoreState;
  word: IWordStoreState;
  word_tags: TWordTagStoreState;
  word_categories: TWordCategoryStoreState;
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
  onGetCategories: () => TCategoryStoreState;
  onGetWords: () => TWordsStoreState;
  onGetCategoryWords: () => TWordsStoreState;
  onGetTagWords: () => TWordsStoreState;
  onGetWord: (slug: string) => IWordStoreState;
  onClearPage: () => void;
  onClearPost: () => void;
  onClearPosts: () => void;
  onClearWord: () => void;
  onClearWords: () => void;
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

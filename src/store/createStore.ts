import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

import { ICoreStoreState } from './core/reducer';
import { IPageStoreState } from './page/reducer';
import { IPostStoreState } from './post/reducer';
import { IWordStoreState } from './word/reducer';
import { ITagStoreState } from './tags/reducer';
import { ICategoryStoreState } from './categories/reducer';
import { IWordTagStoreState } from './word_tags/reducer';
import { IWordCategoryStoreState } from './word_categories/reducer';

export interface IReduxState {
  core: ICoreStoreState;
  page: IPageStoreState;
  posts: IPostStoreState[];
  post: IPostStoreState;
  tags: ITagStoreState[];
  categories: ICategoryStoreState[];
  words: IWordStoreState[];
  word: IWordStoreState;
  word_tags: IWordTagStoreState[];
  word_categories: IWordCategoryStoreState[];
}

export interface IReduxDispatch {
  onSetMenuState(value: boolean): () => void;

  onSetAppLoading(value: boolean): () => void;

  onSetAppError(value: boolean): () => void;

  onGetSiteMeta(): () => ICoreStoreState;

  onGetPage(slug: string): (slug: string) => IPageStoreState;

  onGetPost(slug: string): (slug: string) => IPostStoreState;

  onGetPosts(): () => IPostStoreState[];

  onGetCategoryPosts(): () => IPostStoreState[];

  onGetTagPosts(): () => IPostStoreState[];

  onGetCategories(): () => ICategoryStoreState[];

  onGetWords(): () => IWordStoreState[];

  onGetCategoryWords(): () => IWordStoreState[];

  onGetTagWords(): () => IWordStoreState[];

  onGetWord(slug: string): () => IWordStoreState;

  onClearPage(): () => void;

  onClearPost(): () => void;

  onClearPosts(): () => void;

  onClearWord(): () => void;

  onClearWords(): () => void;
}

export type TReduxProps = IReduxState & IReduxDispatch;

/**
 * Configure Store for Application
 * @returns {any}
 */
const makeStore = (initialState = {} as IReduxState): Store => {
  if (process.env.NODE_ENV === 'production') {
    return createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));
  }

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default makeStore;

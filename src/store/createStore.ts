import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

import { ICoreStoreState } from './core/reducer';
import { IPageStoreState } from './page/reducer';
import { IPostStoreState } from './post/reducer';
import { IWordStoreState } from './word/reducer';
import { getPage, getPost, getSiteMeta } from './rootActions';
import { getWord } from './word/actions';

export interface IReduxState {
  core: ICoreStoreState;
  page: IPageStoreState;
  post: IPostStoreState;
  word: IWordStoreState;
}

export interface IReduxDispatch {
  onGetPage(slug: string): () => typeof getPage;

  onGetSiteMeta(): () => typeof getSiteMeta;

  onGetPost(slug: string): () => typeof getPost;

  onGetWord(slug: string): typeof getWord;
}

export type TReduxProps = IReduxState & IReduxDispatch;

/**
 * Configure Store for Application
 * @returns {any}
 */
const makeStore = (initialState: IReduxState = {} as any): Store => {
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

import { combineReducers, Reducer } from 'redux';
import pageReducer from './page/reducer';
import coreReducer from './core/reducer';
import postReducer from './post/reducer';
import wordReducer from './word/reducer';
import { IReduxState } from './createStore';

/**
 * Root Reducer
 */
export const rootReducer: Reducer<IReduxState> = combineReducers<IReduxState>({
  page: pageReducer,
  core: coreReducer,
  post: postReducer,
  word: wordReducer
});

export default rootReducer;

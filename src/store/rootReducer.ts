import { combineReducers, Reducer } from 'redux';
import pageReducer from './page/reducer';

export interface IAppState {
  page: any;
}

export interface IStateDispatch {
  onGetPage(): any;
}

/**
 * Root Reducer
 * @type {Reducer<any>}
 */
export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  page: pageReducer
});

export default rootReducer;

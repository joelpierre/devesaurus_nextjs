import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';
import ConfigProvider from '../../services/configProvider';

export interface ICoreStoreState {
  title: string;
  description: string;
  hasError: boolean;
  isLoading: boolean;
  options?: Core.ICoreOptions;
}

const APP_TITLE = ConfigProvider.getValue('APP_TITLE');
const SITE_DESCRIPTION = ConfigProvider.getValue('SITE_DESCRIPTION');

const initialState: ICoreStoreState = {
  title: APP_TITLE || '',
  description: SITE_DESCRIPTION || '',
  hasError: false,
  isLoading: false
};

const coreReducer = (
  state: ICoreStoreState = initialState,
  action: AnyAction
): ICoreStoreState => {
  switch (action.type) {
    case actions.GET_SITE_META:
      return updateObject(state, action.payload);

    case actions.GET_SITE_META_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_SITE_META_FAILED:
      return updateObject(state, action.payload);

    case actions.SET_APP_ERROR:
      return updateObject(state, { hasError: action.payload });

    case actions.SET_APP_LOADING:
      return updateObject(state, { isLoading: action.payload });

    default:
      return state;
  }
};

export default coreReducer;
import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';
import ConfigProvider from '../../services/configProvider';
import { AxiosError } from 'axios';

export interface ICoreStoreState {
  title: string;
  description: string;
  hasError: boolean;
  isLoading: boolean;
  isMenuOpen: boolean;
  options?: Core.ICoreOptions;
  primaryMenu: Core.IMenuItem[];
  simpleMenu: Core.IMenuItem[];
  footerMenu: Core.IMenuItem[];
  termsMenu: Core.IMenuItem[];
  initialFetch: boolean;
  error?: Core.IErrorResponse | AxiosError;
}

const APP_TITLE = ConfigProvider.getValue('APP_TITLE') || '';
const SITE_DESCRIPTION = ConfigProvider.getValue('SITE_DESCRIPTION') || '';

const initialState: ICoreStoreState = {
  title: APP_TITLE,
  description: SITE_DESCRIPTION,
  hasError: false,
  isLoading: false,
  isMenuOpen: false,
  primaryMenu: [],
  simpleMenu: [],
  footerMenu: [],
  termsMenu: [],
  initialFetch: false
};

const coreReducer = (
  state: ICoreStoreState = initialState,
  action: AnyAction
): ICoreStoreState => {
  switch (action.type) {
    case actions.GET_PRIMARY_MENU_SUCCESS:
    case actions.GET_FOOTER_MENU_SUCCESS:
    case actions.GET_SIMPLE_MENU_SUCCESS:
    case actions.GET_TERMS_MENU_SUCCESS:
    case actions.GET_SITE_META_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_SITE_META_FAILED:
    case actions.GET_PRIMARY_MENU_FAILED:
    case actions.GET_SIMPLE_MENU_FAILED:
    case actions.GET_TERMS_MENU_FAILED:
    case actions.GET_FOOTER_MENU_FAILED:
      return updateObject(state, action.payload);

    case actions.SET_INITIAL_FETCH:
      return updateObject(state, { initialFetch: action.payload });

    case actions.SET_APP_ERROR:
      return updateObject(state, { hasError: action.payload });

    case actions.SET_APP_LOADING:
      return updateObject(state, { isLoading: action.payload });

    case actions.SET_MENU_STATE:
      return updateObject(state, { isMenuOpen: action.payload });

    default:
      return state;
  }
};

export default coreReducer;

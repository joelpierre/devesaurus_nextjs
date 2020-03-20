import { AnyAction } from 'redux';

import { TReduxError } from '@jpp/typings/index';

import { updateObject } from '../../utils';
import { APP_TITLE, SITE_DESCRIPTION } from '../../utils/constants';
import * as actions from './constants';

export interface ICoreStoreState {
  title: string;
  description: string;
  hasError: boolean;
  isLoading: boolean;
  isMenuOpen: boolean;
  options: Core.ICoreOptions;
  primaryMenu: Core.IMenuItem[];
  simpleMenu: Core.IMenuItem[];
  footerMenu: Core.IMenuItem[];
  termsMenu: Core.IMenuItem[];
  initialFetch: boolean;
  error?: TReduxError;
}

const initialState: ICoreStoreState = {
  title: APP_TITLE,
  description: SITE_DESCRIPTION,
  hasError: false,
  isLoading: false,
  isMenuOpen: false,
  options: {} as Core.ICoreOptions,
  primaryMenu: [],
  simpleMenu: [],
  footerMenu: [],
  termsMenu: [],
  initialFetch: false,
};

export const coreReducer = (
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

    case actions.SET_APP_ERROR_TRUE:
    case actions.SET_APP_ERROR_FALSE:
      return updateObject(state, { hasError: action.payload });

    case actions.SET_APP_LOADING_TRUE:
    case actions.SET_APP_LOADING_FALSE:
      return updateObject(state, { isLoading: action.payload });

    case actions.SET_MENU_STATE_OPEN:
    case actions.SET_MENU_STATE_CLOSE:
      return updateObject(state, { isMenuOpen: action.payload });

    default:
      return state;
  }
};

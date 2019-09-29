import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios/';
import { AxiosError, AxiosResponse } from 'axios';
import {
  GET_FOOTER_MENU_FAILED,
  GET_FOOTER_MENU_SUCCESS,
  GET_PRIMARY_MENU_FAILED,
  GET_PRIMARY_MENU_SUCCESS,
  GET_SITE_META_FAILED,
  GET_SITE_META_SUCCESS,
  GET_TERMS_MENU_FAILED,
  GET_TERMS_MENU_SUCCESS,
  SET_APP_ERROR,
  SET_APP_LOADING, SET_INITIAL_FETCH
} from './constants';

import { IReduxDispatch, IReduxState } from '../createStore';

export const getSiteMeta: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/options/acf`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));
        return dispatch(getSiteMetaSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        return dispatch(getSiteMetaFailed(error));
      });
  };
};

export const getPrimaryMenu: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/menus/primary-menu`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));
        return dispatch(getPrimaryMenuSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        return dispatch(getPrimaryMenuFailed(error));
      });
  };
};

export const getFooterMenu: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/menus/footer-menu`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));
        return dispatch(getFooterMenuSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        return dispatch(getFooterMenuFailed(error));
      });
  };
};

export const getTermsMenu: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/menus/terms-menu`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));
        return dispatch(getTermsMenuSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        return dispatch(getTermsMenuFailed(error));
      });
  };
};

export const getSiteMetaSuccess = (data: Core.ICoreOptions) => ({
  type: GET_SITE_META_SUCCESS,
  payload: {
    options: {
      ...data
    }
  }
});

export const getPrimaryMenuSuccess = (data: Core.IMenuItem[]) => ({
  type: GET_PRIMARY_MENU_SUCCESS,
  payload: {
    primaryMenu: {
      ...data
    }
  }
});

export const getPrimaryMenuFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_PRIMARY_MENU_FAILED,
  payload: {
    error
  }
});

export const getFooterMenuSuccess = (data: Core.IMenuItem[]) => ({
  type: GET_FOOTER_MENU_SUCCESS,
  payload: {
    footerMenu: {
      ...data
    }
  }
});

export const getFooterMenuFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_FOOTER_MENU_FAILED,
  payload: {
    error
  }
});

export const getTermsMenuSuccess = (data: Core.IMenuItem[]) => ({
  type: GET_TERMS_MENU_SUCCESS,
  payload: {
    termsMenu: {
      ...data
    }
  }
});

export const getTermsMenuFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_TERMS_MENU_FAILED,
  payload: {
    error
  }
});

export const getSiteMetaFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_SITE_META_FAILED,
  payload: {
    error
  }
});

export const setInitialFetch = (value: boolean) => ({
  type: SET_INITIAL_FETCH,
  payload: value
});

export const setAppError = (value: boolean) => ({
  type: SET_APP_ERROR,
  payload: value
});

export const setAppLoading = (value: boolean) => ({
  type: SET_APP_LOADING,
  payload: value
});

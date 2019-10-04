import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios/';
import { AxiosError, AxiosResponse } from 'axios';
import {
  GET_FOOTER_MENU_FAILED,
  GET_FOOTER_MENU_SUCCESS,
  GET_PRIMARY_MENU_FAILED,
  GET_PRIMARY_MENU_SUCCESS,
  GET_SIMPLE_MENU_FAILED,
  GET_SIMPLE_MENU_SUCCESS,
  GET_SITE_META_FAILED,
  GET_SITE_META_SUCCESS,
  GET_TERMS_MENU_FAILED,
  GET_TERMS_MENU_SUCCESS,
  SET_APP_ERROR,
  SET_APP_LOADING,
  SET_INITIAL_FETCH,
  SET_MENU_STATE
} from './constants';

import { IReduxDispatch, IReduxState } from '../createStore';

export const getSiteMeta: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    return axios
      .get(`/options/acf`)
      .then((response: AxiosResponse) => {
        return dispatch(getSiteMetaSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(getSiteMetaFailed(error));
        throw error;
      });
  };
};

export const getPrimaryMenu: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    return axios
      .get(`/menus/primary-menu`)
      .then((response: AxiosResponse) => {
        return dispatch(getPrimaryMenuSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(getPrimaryMenuFailed(error));
        throw error;
      });
  };
};

export const getSimpleMenu: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    return axios
      .get(`/menus/simple-menu`)
      .then((response: AxiosResponse) => {
        return dispatch(getSimpleMenuSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(getSimpleMenuFailed(error));
        throw error;
      });
  };
};

export const getFooterMenu: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    return axios
      .get(`/menus/footer-menu`)
      .then((response: AxiosResponse) => {
        return dispatch(getFooterMenuSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(getFooterMenuFailed(error));
        throw error;
      });
  };
};

export const getTermsMenu: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    return axios
      .get(`/menus/terms-menu`)
      .then((response: AxiosResponse) => {
        return dispatch(getTermsMenuSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(getTermsMenuFailed(error));
        throw error;
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
    primaryMenu: [
      ...data
    ]
  }
});

export const getPrimaryMenuFailed = (error: AxiosError) => ({
  type: GET_PRIMARY_MENU_FAILED,
  payload: {
    primaryMenu: {
      error
    }
  }
});

export const getSimpleMenuSuccess = (data: Core.IMenuItem[]) => ({
  type: GET_SIMPLE_MENU_SUCCESS,
  payload: {
    simpleMenu: [
      ...data
    ]
  }
});

export const getSimpleMenuFailed = (error: AxiosError) => ({
  type: GET_SIMPLE_MENU_FAILED,
  payload: {
    simpleMenu: {
      error
    }
  }
});

export const getFooterMenuSuccess = (data: Core.IMenuItem[]) => ({
  type: GET_FOOTER_MENU_SUCCESS,
  payload: {
    footerMenu: [
      ...data
    ]
  }
});

export const getFooterMenuFailed = (error: AxiosError) => ({
  type: GET_FOOTER_MENU_FAILED,
  payload: {
    footerMenu: {
      error
    }
  }
});

export const getTermsMenuSuccess = (data: Core.IMenuItem[]) => ({
  type: GET_TERMS_MENU_SUCCESS,
  payload: {
    termsMenu: [
      ...data
    ]
  }
});

export const getTermsMenuFailed = (error: AxiosError) => ({
  type: GET_TERMS_MENU_FAILED,
  payload: {
    termsMenu: {
      error
    }
  }
});

export const getSiteMetaFailed = (error: AxiosError) => ({
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

export const setMenuState = (value: boolean) => ({
  type: SET_MENU_STATE,
  payload: value
});

export const setAppLoading = (value: boolean) => ({
  type: SET_APP_LOADING,
  payload: value
});

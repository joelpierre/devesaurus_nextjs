import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios/';
import { GET_SITE_META_FAILED, GET_SITE_META_SUCCESS, SET_APP_ERROR, SET_APP_LOADING } from './constants';
import { IReduxDispatch, IReduxState } from '../createStore';

export const getSiteMeta: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    return axios
      .get(`/pages?slug=${slug}`)
      .then(response => {
        return dispatch(getSiteMetaSuccess(response.data));
      })
      .catch(error => {
        return dispatch(getSiteMetaFailed(error));
      });
  };
};

export const getSiteMetaSuccess = (data: any) => ({
  type: GET_SITE_META_SUCCESS,
  payload: {
    hasError: false,
    ...data
  }
});

export const getSiteMetaFailed = (error: any) => ({
  type: GET_SITE_META_FAILED,
  payload: {
    hasError: true,
    ...error
  }
});

export const setAppError = (value: boolean) => ({
  type: SET_APP_ERROR,
  payload: {
    hasError: value
  }
});

export const setAppLoading = (value: boolean) => ({
  type: SET_APP_LOADING,
  payload: {
    isLoading: value
  }
});

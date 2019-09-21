import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import axios from '../../utils/axios/';
import { GET_SITE_META_FAILED, GET_SITE_META_SUCCESS, SET_APP_ERROR, SET_APP_LOADING } from './constants';
import { IReduxDispatch, IReduxState } from '../createStore';
import { AxiosError, AxiosResponse } from 'axios';

export const getSiteMeta: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    return axios
      .get(`/options/acf`)
      .then((response: AxiosResponse) => {
        return dispatch(getSiteMetaSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        return dispatch(getSiteMetaFailed(error));
      });
  };
};

export const getSiteMetaSuccess = (data: any) => ({
  type: GET_SITE_META_SUCCESS,
  payload: {
    options: {
      ...data
    }
  }
});

export const getSiteMetaFailed = (error: any) => ({
  type: GET_SITE_META_FAILED,
  payload: {
    ...error
  }
});

export const setAppError = (value: boolean) => ({
  type: SET_APP_ERROR,
  payload: value
});

export const setAppLoading = (value: boolean) => ({
  type: SET_APP_LOADING,
  payload: value
});

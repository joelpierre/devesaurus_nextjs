import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios/';

import { GET_PAGE_FAILED, GET_PAGE_SUCCESS } from './constants';
import { AxiosError, AxiosResponse } from 'axios';
import { IReduxDispatch, IReduxState } from '../createStore';
import { setAppError, setAppLoading } from '../rootActions';

export const getPage: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/page/${slug}`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));
        return dispatch(getPageSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        // console.warn(error);
        dispatch(setAppError(true));
        dispatch(setAppLoading(false));
        return dispatch(getPageFailed(error));
      });
  };
};

export const getPageSuccess = (data: any) => ({
  type: GET_PAGE_SUCCESS,
  payload: {
    ...data
  }
});

export const getPageFailed = (error: any) => ({
  type: GET_PAGE_FAILED,
  payload: {
    ...error
  }
});

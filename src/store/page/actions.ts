import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios/';

import { CLEAR_PAGE, GET_PAGE_FAILED, GET_PAGE_SUCCESS } from './constants';
import { AxiosError, AxiosResponse } from 'axios';
import { IReduxDispatch, IReduxState } from '../createStore';
import { setAppError, setAppLoading } from '../rootActions';
import { IPageStoreState } from './reducer';

export const getPage: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/page/${slug}`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = { message: 'Page not found', hasError: true, code: 404 as Core.TErrorCode };
          dispatch(setAppError(true));
          return dispatch(getPageFailed(error));
        }

        return dispatch(getPageSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getPageFailed(error));
        throw error;
      });
  };
};

export const getPageSuccess = (data: IPageStoreState) => ({
  type: GET_PAGE_SUCCESS,
  payload: {
    ...data
  }
});

export const getPageFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_PAGE_FAILED,
  payload: {
    error
  }
});

export const clearPage = () => ({
  type: CLEAR_PAGE
});

import { AxiosError, AxiosResponse } from 'axios';
import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import axios from '../../utils/axios/';
import { setAppError, setAppLoading } from '../core/actions';
import { IReduxDispatch, IReduxState } from '../createStore';
import { CLEAR_POST, GET_POST_FAILED, GET_POST_SUCCESS } from './constants';
import { IPostStoreState } from './reducer';

export const getPost: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = (slug: string): any => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));
    return axios
      .get(`/post/${slug}`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = {
            message: 'Page not found',
            hasError: true,
            code: 404 as Core.TErrorCode,
          };
          dispatch(setAppError(true));
          return dispatch(getPostFailed(error));
        }

        return dispatch(getPostSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getPostFailed(error));
        throw error;
      });
  };
};

export const getPostSuccess = (data: IPostStoreState) => ({
  type: GET_POST_SUCCESS,
  payload: {
    ...data,
  },
});

export const getPostFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_POST_FAILED,
  payload: {
    error,
  },
});

export const clearPost = () => ({
  type: CLEAR_POST,
});

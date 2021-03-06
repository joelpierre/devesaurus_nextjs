import { AxiosError, AxiosResponse } from 'axios';
import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import axios from '../../utils/axios/';
import { setAppError, setAppLoading } from '../core/actions';
import { IReduxDispatch, IReduxState } from '../createStore';
import { CLEAR_WORD, GET_WORD_FAILED, GET_WORD_SUCCESS } from './constants';
import { IWordStoreState } from './reducer';

export const getWord: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/word/${slug}`)
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
          return dispatch(getWordFailed(error));
        }

        return dispatch(getWordSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getWordFailed(error));
        throw error;
      });
  };
};

export const getWordSuccess = (data: IWordStoreState) => ({
  type: GET_WORD_SUCCESS,
  payload: {
    ...data,
  },
});

export const getWordFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_WORD_FAILED,
  payload: {
    error,
  },
});

export const clearWord = () => ({
  type: CLEAR_WORD,
});

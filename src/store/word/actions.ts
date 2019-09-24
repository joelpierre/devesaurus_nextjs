import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios/';

import { CLEAR_WORD, GET_WORD_FAILED, GET_WORD_SUCCESS } from './constants';
import { IReduxDispatch, IReduxState } from '../createStore';
import { setAppError, setAppLoading } from '../core/actions';
import { IWordStoreState } from './reducer';
import { AxiosError, AxiosResponse } from 'axios';

export const getWord: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/word/${slug}`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          dispatch(setAppError(true));
          return dispatch(getWordFailed({ message: 'Page not found', hasError: true, code: 404 }));
        }

        return dispatch(getWordSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        return dispatch(getWordFailed(error));
      });
  };
};

export const getWordSuccess = (data: IWordStoreState) => ({
  type: GET_WORD_SUCCESS,
  payload: {
    ...data
  }
});

export const getWordFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_WORD_FAILED,
  payload: {
    error
  }
});

export const clearWord = () => ({
  type: CLEAR_WORD
});

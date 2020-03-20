import { AxiosError, AxiosResponse } from 'axios';
import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import axios from '../../utils/axios/';
import { setAppError, setAppLoading } from '../core/actions';
import { IReduxDispatch, IReduxState } from '../createStore';
import { IWordStoreState } from '../word/reducer';
import {
  CLEAR_FEATURED_WORDS,
  CLEAR_WORDS,
  GET_FEATURED_WORDS_FAILED,
  GET_FEATURED_WORDS_SUCCESS,
  GET_WORDS_FAILED,
  GET_WORDS_SUCCESS,
} from './constants';

export const getWords: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get('/words')
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = {
            message: 'Words not found',
            hasError: true,
            code: 404 as Core.TErrorCode,
          };
          dispatch(setAppError(true));
          return dispatch(getWordsFailed(error));
        }

        return dispatch(getWordsSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getWordsFailed(error));
        throw error;
      });
  };
};

export const getFeaturedWords: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get('/featured-words')
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = {
            message: 'Words not found',
            hasError: true,
            code: 404 as Core.TErrorCode,
          };
          dispatch(setAppError(true));
          return dispatch(getFeaturedWordsFailed(error));
        }

        return dispatch(getFeaturedWordsSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getFeaturedWordsFailed(error));
        throw error;
      });
  };
};

export const getCategoryWords: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/word_category/${slug}`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = {
            message: 'No words found for that category',
            hasError: true,
            code: 404 as Core.TErrorCode,
          };
          dispatch(setAppError(true));
          return dispatch(getWordsFailed(error));
        }

        return dispatch(getWordsSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getWordsFailed(error));
        throw error;
      });
  };
};

export const getTagWords: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/word_tag/${slug}`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = {
            message: 'No words found for that tag',
            hasError: true,
            code: 404 as Core.TErrorCode,
          };
          dispatch(setAppError(true));
          return dispatch(getWordsFailed(error));
        }

        return dispatch(getWordsSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getWordsFailed(error));
        throw error;
      });
  };
};

export const getWordsSuccess = (data: IWordStoreState[]) => ({
  type: GET_WORDS_SUCCESS,
  payload: [...data],
});

export const getWordsFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_WORDS_FAILED,
  payload: {
    error,
  },
});

export const getFeaturedWordsSuccess = (data: IWordStoreState[]) => ({
  type: GET_FEATURED_WORDS_SUCCESS,
  payload: [...data],
});

export const getFeaturedWordsFailed = (
  error: Core.IErrorResponse | AxiosError
) => ({
  type: GET_FEATURED_WORDS_FAILED,
  payload: {
    error,
  },
});

export const clearWords = () => ({
  type: CLEAR_WORDS,
});

export const clearFeaturedWords = () => ({
  type: CLEAR_FEATURED_WORDS,
});

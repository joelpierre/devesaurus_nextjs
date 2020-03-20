import { AxiosError, AxiosResponse } from 'axios';
import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import axios from '../../utils/axios';
import { IReduxDispatch, IReduxState } from '../createStore';
import { setAppError, setAppLoading } from '../rootActions';
import { IWordStoreState } from '../word/reducer';
import { IWordCategoryStoreState } from '../word_categories/reducer';
import {
  CLEAR_WORD_CATEGORY,
  GET_WORD_CATEGORY_FAILED,
  GET_WORD_CATEGORY_SUCCESS,
  GET_WORD_CATEGORY_WORDS_FAILED,
  GET_WORD_CATEGORY_WORDS_SUCCESS,
} from './constants';

export const getWordCategory: ActionCreator<ThunkAction<
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
            message: 'Page not found',
            hasError: true,
            code: 404 as Core.TErrorCode,
          };
          dispatch(setAppError(true));
          return dispatch(getWordCategoryFailed(error));
        }

        return dispatch(getWordCategorySuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getWordCategoryFailed(error));
        throw error;
      });
  };
};

export const getWordCategoryWords: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/word_category_words/${slug}`)
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
          return dispatch(getWordCategoryWordsFailed(error));
        }

        return dispatch(getWordCategoryWordsSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getWordCategoryWordsFailed(error));
        throw error;
      });
  };
};

export const getWordCategorySuccess = (data: IWordCategoryStoreState) => ({
  type: GET_WORD_CATEGORY_SUCCESS,
  payload: data,
});

export const getWordCategoryFailed = (
  error: Core.IErrorResponse | AxiosError
) => ({
  type: GET_WORD_CATEGORY_FAILED,
  payload: error,
});

export const getWordCategoryWordsSuccess = (data: IWordStoreState[]) => ({
  type: GET_WORD_CATEGORY_WORDS_SUCCESS,
  payload: data,
});

export const getWordCategoryWordsFailed = (
  error: Core.IErrorResponse | AxiosError
) => ({
  type: GET_WORD_CATEGORY_WORDS_FAILED,
  payload: error,
});

export const clearWordCategory = () => ({
  type: CLEAR_WORD_CATEGORY,
});

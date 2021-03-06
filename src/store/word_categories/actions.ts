import { AxiosError, AxiosResponse } from 'axios';
import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import axios from '../../utils/axios';
import { IReduxDispatch, IReduxState } from '../createStore';
import { setAppError, setAppLoading } from '../rootActions';
import {
  CLEAR_WORD_CATEGORIES,
  GET_WORD_CATEGORIES_FAILED,
  GET_WORD_CATEGORIES_SUCCESS,
} from './constants';
import { IWordCategoryStoreState } from './reducer';

export const getWordCategories: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get('/word_categories')
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
          return dispatch(getWordCategoriesFailed(error));
        }

        return dispatch(getWordCategoriesSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getWordCategoriesFailed(error));
        throw error;
      });
  };
};

export const getWordCategoriesSuccess = (data: IWordCategoryStoreState[]) => ({
  type: GET_WORD_CATEGORIES_SUCCESS,
  payload: data,
});

export const getWordCategoriesFailed = (
  error: Core.IErrorResponse | AxiosError
) => ({
  type: GET_WORD_CATEGORIES_FAILED,
  payload: {
    error,
  },
});

export const clearWordCategories = () => ({
  type: CLEAR_WORD_CATEGORIES,
});

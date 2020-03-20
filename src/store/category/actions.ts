import { AxiosError, AxiosResponse } from 'axios';
import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import axios from '../../utils/axios';
import { ICategoryStoreState } from '../categories/reducer';
import { IReduxDispatch, IReduxState } from '../createStore';
import { setAppError, setAppLoading } from '../rootActions';
import {
  CLEAR_CATEGORY,
  GET_CATEGORY_FAILED,
  GET_CATEGORY_SUCCESS,
} from './constants';

export const getCategory: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get('/category')
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
          return dispatch(getCategoryFailed(error));
        }

        return dispatch(getCategorySuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getCategoryFailed(error));
        throw error;
      });
  };
};

export const getCategorySuccess = (data: ICategoryStoreState) => ({
  type: GET_CATEGORY_SUCCESS,
  payload: data,
});

export const getCategoryFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_CATEGORY_FAILED,
  payload: error,
});

export const clearCategory = () => ({
  type: CLEAR_CATEGORY,
});

import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios';
import { setAppError, setAppLoading } from '../rootActions';
import { CLEAR_CATEGORIES, GET_CATEGORIES_FAILED, GET_CATEGORIES_SUCCESS } from './constants';
import { IReduxDispatch, IReduxState } from '../createStore';
import { ICategoryStoreState } from './reducer';

export const getCategories: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/categories`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = { message: 'Page not found', hasError: true, code: 404 as Core.TErrorCode };
          dispatch(setAppError(true));
          return dispatch(getCategoriesFailed(error));
        }

        return dispatch(getCategoriesSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getCategoriesFailed(error));
        throw error;
      });
  };
};

export const getCategoriesSuccess = (data: ICategoryStoreState) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: {
    ...data
  }
});

export const getCategoriesFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_CATEGORIES_FAILED,
  payload: {
    error
  }
});

export const clearCategories = () => ({
  type: CLEAR_CATEGORIES
});

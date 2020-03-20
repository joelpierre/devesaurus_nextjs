import { AxiosError, AxiosResponse } from 'axios';
import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import axios from '../../utils/axios/';
import { setAppError, setAppLoading } from '../core/actions';
import { IReduxDispatch, IReduxState } from '../createStore';
import { IWordStoreState } from '../word/reducer';
import { CLEAR_POSTS, GET_POSTS_FAILED, GET_POSTS_SUCCESS } from './constants';

export const getPosts: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get('/posts')
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = {
            message: 'Posts not found',
            hasError: true,
            code: 404 as Core.TErrorCode,
          };
          dispatch(setAppError(true));
          return dispatch(getPostsFailed(error));
        }

        return dispatch(getPostsSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getPostsFailed(error));
        throw error;
      });
  };
};

export const getCategoryPosts: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/category/${slug}`)
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
          return dispatch(getPostsFailed(error));
        }

        return dispatch(getPostsSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getPostsFailed(error));
        throw error;
      });
  };
};

export const getTagPosts: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/tag/${slug}`)
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
          return dispatch(getPostsFailed(error));
        }

        return dispatch(getPostsSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getPostsFailed(error));
        throw error;
      });
  };
};

export const getPostsSuccess = (data: IWordStoreState[]) => ({
  type: GET_POSTS_SUCCESS,
  payload: [...data],
});

export const getPostsFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_POSTS_FAILED,
  payload: {
    error,
  },
});

export const clearPosts = () => ({
  type: CLEAR_POSTS,
});

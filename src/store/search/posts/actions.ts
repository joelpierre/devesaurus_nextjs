import { AxiosError, AxiosResponse } from 'axios';
import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import axios from '../../../utils/axios';
import { setAppError, setAppLoading } from '../../core/actions';
import { IReduxDispatch, IReduxState } from '../../createStore';
import { IPostStoreState } from '../../post/reducer';
import {
  CLEAR_POST_SEARCH_RESULTS,
  GET_POST_SEARCH_RESULTS_FAILED,
  GET_POST_SEARCH_RESULTS_SUCCESS,
} from '../constants';

export const getPostsSearch: ActionCreator<ThunkAction<
  Promise<any>,
  IReduxState,
  IReduxDispatch,
  AnyAction
>> = (searchTerm: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/search?type=post&term=${searchTerm}`)
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
          return dispatch(getSearchPostsFailed(error));
        }

        return dispatch(getSearchPostsSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getSearchPostsFailed(error));
        throw error;
      });
  };
};

export const getSearchPostsSuccess = (data: IPostStoreState[]) => ({
  type: GET_POST_SEARCH_RESULTS_SUCCESS,
  payload: data,
});

export const getSearchPostsFailed = (
  error: Core.IErrorResponse | AxiosError
) => ({
  type: GET_POST_SEARCH_RESULTS_FAILED,
  payload: error,
});

export const clearSearchPosts = () => ({
  type: CLEAR_POST_SEARCH_RESULTS,
});

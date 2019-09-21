import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios/';

import { GET_POST_FAILED, GET_POST_SUCCESS } from './constants';
import { IReduxDispatch, IReduxState } from '../createStore';
import { setAppError, setAppLoading } from '../core/actions';

export const getPost: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));
    return axios
      .get(`/post/${slug}`)
      .then(response => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          dispatch(setAppError(true));
        }

        return dispatch(getPostSuccess(response.data));
      })
      .catch(error => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        return dispatch(getPostFailed(error));
      });
  };
};

export const getPostSuccess = (data: any) => ({
  type: GET_POST_SUCCESS,
  payload: {
    ...data
  }
});

export const getPostFailed = (error: any) => ({
  type: GET_POST_FAILED,
  payload: {
    ...error
  }
});

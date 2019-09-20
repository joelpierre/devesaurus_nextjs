import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios/';

import { GET_POST_FAILED, GET_POST_SUCCESS } from './constants';
import { IReduxDispatch, IReduxState } from '../createStore';

export const getPost: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    return axios
      .get(`/post?page=${slug}`)
      .then(response => {
        return dispatch(getPostSuccess(response.data));
      })
      .catch(error => {
        return dispatch(getPostFailed(error));
      });
  };
};

export const getPostSuccess = (data: any) => ({
  type: GET_POST_SUCCESS,
  payload: {
    hasError: false,
    ...data
  }
});

export const getPostFailed = (error: any) => ({
  type: GET_POST_FAILED,
  payload: {
    hasError: true,
    ...error
  }
});

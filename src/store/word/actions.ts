import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios/';

import { GET_WORD_FAILED, GET_WORD_SUCCESS } from './constants';
import { IReduxDispatch, IReduxState } from '../createStore';

export const getWord: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    return axios
      .get(`/post?page=${slug}`)
      .then(response => {
        return dispatch(getWordSuccess(response.data));
      })
      .catch(error => {
        return dispatch(getWordFailed(error));
      });
  };
};

export const getWordSuccess = (data: any) => ({
  type: GET_WORD_SUCCESS,
  payload: {
    hasError: false,
    ...data
  }
});

export const getWordFailed = (error: any) => ({
  type: GET_WORD_FAILED,
  payload: {
    hasError: true,
    ...error
  }
});

import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios/';

import { IAppState, IStateDispatch } from '../rootReducer';

export const GET_PAGE = 'GET_PAGE';
export const GET_PAGE_SUCCESS = 'GET_PAGE_SUCCESS';
export const GET_PAGE_FAILED = 'GET_PAGE_FAILED';

export const getPage: ActionCreator<ThunkAction<Promise<any>, IAppState, IStateDispatch, AnyAction>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    return axios
      .get(`/post?page=${slug}`)
      .then(response => {
        return dispatch(getPageSuccess(response.data));
      })
      .catch(error => {
        return dispatch(getPageFailed(error));
      });
  };
};

export const getPageSuccess = (data: any) => ({
  type: GET_PAGE_SUCCESS,
  payload: {
    hasError: false,
    ...data
  }
});

export const getPageFailed = (error: any) => ({
  type: GET_PAGE_FAILED,
  payload: {
    hasError: true,
    ...error
  }
});

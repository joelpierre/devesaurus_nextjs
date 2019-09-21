import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios/';

import { GET_WORD_FAILED, GET_WORD_SUCCESS } from './constants';
import { IReduxDispatch, IReduxState } from '../createStore';
import { setAppError, setAppLoading } from '../core/actions';

export const getWord: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = (slug: string) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/word/${slug}`)
      .then(response => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          dispatch(setAppError(true));
          return dispatch(getWordFailed({ error: 'Route doesn\'t exist', status: 404 }));
        }

        return dispatch(getWordSuccess(response.data));
      })
      .catch(error => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        return dispatch(getWordFailed(error));
      });
  };
};

export const getWordSuccess = (data: any) => ({
  type: GET_WORD_SUCCESS,
  payload: {
    ...data
  }
});

export const getWordFailed = (error: any) => ({
  type: GET_WORD_FAILED,
  payload: {
    ...error
  }
});

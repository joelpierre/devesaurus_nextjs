import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios';
import { setAppError, setAppLoading } from '../rootActions';
import { IReduxDispatch, IReduxState } from '../createStore';
import { IWordTagStoreState } from '../word_tags/reducer';
import { CLEAR_WORD_TAG, GET_WORD_TAG_FAILED, GET_WORD_TAG_SUCCESS } from './constants';

export const getWordTag: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/word_tag`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = { message: 'Page not found', hasError: true, code: 404 as Core.TErrorCode };
          dispatch(setAppError(true));
          return dispatch(getWordTagFailed(error));
        }

        return dispatch(getWordTagSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getWordTagFailed(error));
        throw error;
      });
  };
};

export const getWordTagSuccess = (data: IWordTagStoreState) => ({
  type: GET_WORD_TAG_SUCCESS,
  payload: data
});

export const getWordTagFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_WORD_TAG_FAILED,
  payload: error
});

export const clearWordTag = () => ({
  type: CLEAR_WORD_TAG
});

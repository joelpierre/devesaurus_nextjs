import { AxiosError, AxiosResponse } from 'axios';
import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../../utils/axios';
import { setAppError, setAppLoading } from '../../core/actions';
import { IReduxDispatch, IReduxState } from '../../createStore';
import { IWordStoreState } from '../../word/reducer';
import {
  CLEAR_WORD_SEARCH_RESULTS,
  GET_WORD_SEARCH_RESULTS_FAILED,
  GET_WORD_SEARCH_RESULTS_SUCCESS
} from '../constants';

export const getWordsSearch: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = (
  searchTerm: string
) => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/search?type=word&term=${searchTerm}`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = { message: 'Words not found', hasError: true, code: 404 as Core.TErrorCode };
          dispatch(setAppError(true));
          return dispatch(getSearchWordsFailed(error));
        }

        return dispatch(getSearchWordsSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getSearchWordsFailed(error));
        throw error;
      });
  };
};

export const getSearchWordsSuccess = (data: IWordStoreState[]) => ({
  type: GET_WORD_SEARCH_RESULTS_SUCCESS,
  payload: data
});

export const getSearchWordsFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_WORD_SEARCH_RESULTS_FAILED,
  payload: {
    words: error
  }
});

export const clearSearchWords = () => ({
  type: CLEAR_WORD_SEARCH_RESULTS
});

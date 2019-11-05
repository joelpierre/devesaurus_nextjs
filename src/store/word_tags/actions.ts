import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { wpV2AxiosInstance } from '../../utils/axios';
import { setAppError, setAppLoading } from '../rootActions';
import { GET_WORD_TAGS_FAILED, GET_WORD_TAGS_SUCCESS } from './constants';
import { IReduxDispatch, IReduxState } from '../createStore';
import { IWordTagStoreState } from './reducer';

export const getWordTags: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return wpV2AxiosInstance
      .get(`/tags`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = { message: 'Page not found', hasError: true, code: 404 as Core.TErrorCode };
          dispatch(setAppError(true));
          return dispatch(getWordTagsFailed(error));
        }

        return dispatch(getWordTagsSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getWordTagsFailed(error));
        throw error;
      });
  };
};

export const getWordTagsSuccess = (data: IWordTagStoreState[]) => ({
  type: GET_WORD_TAGS_SUCCESS,
  payload: [
    ...data
  ]
});

export const getWordTagsFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_WORD_TAGS_FAILED,
  payload: {
    error
  }
});

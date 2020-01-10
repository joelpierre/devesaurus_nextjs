import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import axios from '../../utils/axios';
import { setAppError, setAppLoading } from '../rootActions';
import { IReduxDispatch, IReduxState } from '../createStore';
import { ITagStoreState } from '../tags/reducer';
import { CLEAR_TAG, GET_TAG_FAILED, GET_TAG_SUCCESS } from './constants';

export const getTag: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/category`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = { message: 'Page not found', hasError: true, code: 404 as Core.TErrorCode };
          dispatch(setAppError(true));
          return dispatch(getTagFailed(error));
        }

        return dispatch(getTagSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getTagFailed(error));
        throw error;
      });
  };
};

export const getTagSuccess = (data: ITagStoreState) => ({
  type: GET_TAG_SUCCESS,
  payload: data
});

export const getTagFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_TAG_FAILED,
  payload: error
});

export const clearTag = () => ({
  type: CLEAR_TAG
});

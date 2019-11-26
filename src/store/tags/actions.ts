import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import axios  from '../../utils/axios';
import { setAppError, setAppLoading } from '../rootActions';
import { GET_TAGS_FAILED, GET_TAGS_SUCCESS } from './constants';
import { IReduxDispatch, IReduxState } from '../createStore';
import { ITagStoreState } from './reducer';

export const getTags: ActionCreator<ThunkAction<Promise<any>, IReduxState, IReduxDispatch, AnyAction>> = () => {
  return (dispatch: Dispatch): Promise<AnyAction> => {
    dispatch(setAppLoading(true));
    dispatch(setAppError(false));

    return axios
      .get(`/tags`)
      .then((response: AxiosResponse) => {
        dispatch(setAppLoading(false));

        // We check for the error as wordpress doesn't return a 404.
        if (response.data.length === 0) {
          const error = { message: 'Page not found', hasError: true, code: 404 as Core.TErrorCode };
          dispatch(setAppError(true));
          return dispatch(getTagsFailed(error));
        }

        return dispatch(getTagsSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(setAppLoading(false));
        dispatch(setAppError(true));
        dispatch(getTagsFailed(error));
        throw error;
      });
  };
};

export const getTagsSuccess = (data: ITagStoreState[]) => ({
  type: GET_TAGS_SUCCESS,
  payload: [
    ...data
  ]
});

export const getTagsFailed = (error: Core.IErrorResponse | AxiosError) => ({
  type: GET_TAGS_FAILED,
  payload: {
    error
  }
});

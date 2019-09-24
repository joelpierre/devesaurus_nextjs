import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';
import { AxiosError } from 'axios';

export interface IPostStoreState {
  id: number;
  title: string;
  slug: string;
  error?: Core.IErrorResponse | AxiosError;
}

const initialState = {};

const postReducer = (
  state: IPostStoreState = initialState as any,
  action: AnyAction
): IPostStoreState => {
  switch (action.type) {
    case actions.GET_POST:
      return updateObject(state, action.payload);

    case actions.GET_POST_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_POST_FAILED:
      return { ...action.payload };

    case actions.CLEAR_POST:
      return {} as any;

    default:
      return state;
  }
};

export default postReducer;

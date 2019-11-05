import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';
import { AxiosError } from 'axios';

export interface IWordStoreState {
  id: number;
  title: string;
  slug: string;
  error?: Core.IErrorResponse | AxiosError;
}

const initialState = {};

const wordReducer = (
  state = initialState as IWordStoreState,
  action: AnyAction
): IWordStoreState => {
  switch (action.type) {
    case actions.GET_WORD_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_WORD_FAILED:
      return { ...action.payload };

    case actions.CLEAR_WORD:
      return {} as any;

    default:
      return state;
  }
};

export default wordReducer;

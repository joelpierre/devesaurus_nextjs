import * as actions from './constants';
import { AnyAction } from 'redux';
import { AxiosError } from 'axios';

export interface IWordTagStoreState {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  taxonomy: string;
  yoast: Core.IYoastMeta;
  error?: Core.IErrorResponse | AxiosError;
}

const initialState = [];

const wordTagReducer = (
  state = initialState as IWordTagStoreState[],
  action: AnyAction
): IWordTagStoreState[] => {
  switch (action.type) {
    case actions.GET_WORD_TAGS_SUCCESS:
      return [...state, ...action.payload];

    case actions.GET_WORD_TAGS_FAILED:
      return { ...action.payload };

    default:
      return state;
  }
};

export default wordTagReducer;

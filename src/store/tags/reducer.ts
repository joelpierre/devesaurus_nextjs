import * as actions from './constants';
import { AnyAction } from 'redux';
import { AxiosError } from 'axios';

export interface ITagStoreState {
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

const tagReducer = (
  state = initialState as ITagStoreState[],
  action: AnyAction
): ITagStoreState[] => {
  switch (action.type) {
    case actions.GET_TAGS_SUCCESS:
      return [...state, ...action.payload];

    case actions.GET_TAGS_FAILED:
      return { ...action.payload };

    default:
      return state;
  }
};

export default tagReducer;

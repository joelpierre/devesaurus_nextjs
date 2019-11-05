import * as actions from './constants';
import { AnyAction } from 'redux';
import { AxiosError } from 'axios';

export interface ICategoryStoreState {
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

const categoryReducer = (
  state = initialState as ICategoryStoreState[],
  action: AnyAction
): ICategoryStoreState[] => {
  switch (action.type) {
    case actions.GET_CATEGORIES_SUCCESS:
      return [...state, ...action.payload];

    case actions.GET_CATEGORIES_FAILED:
      return { ...action.payload };

    default:
      return state;
  }
};

export default categoryReducer;

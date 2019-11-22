import { updateArray } from '../../utils';
import * as actions from './constants';
import { AnyAction } from 'redux';
import { TReduxError } from '@jpp/typings/index';

export interface ICategoryStoreState {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  taxonomy: Core.ETaxonomy;
  yoast: Core.IYoastMeta;
  error?: TReduxError;
}

export type TCategoryStoreState = ICategoryStoreState[] | TReduxError;

const initialState = [] as ICategoryStoreState[];

const categoryReducer = (
  state = initialState,
  action: AnyAction
): TCategoryStoreState => {
  switch (action.type) {
    case actions.GET_CATEGORIES_SUCCESS:
      return updateArray(state, action.payload);

    case actions.GET_CATEGORIES_FAILED:
      return { ...action.payload };

    default:
      return state;
  }
};

export default categoryReducer;

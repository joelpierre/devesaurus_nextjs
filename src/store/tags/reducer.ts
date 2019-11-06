import * as actions from './constants';
import { AnyAction } from 'redux';
import { TReduxError } from '@jpp/typings/index';

export interface ITagStoreState {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  taxonomy: string;
  yoast: Core.IYoastMeta;
  error?: TReduxError;
}

export type TTagStoreState = ITagStoreState[] | TReduxError;

const initialState = [] as ITagStoreState[];

const tagReducer = (
  state = initialState,
  action: AnyAction
): TTagStoreState => {
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

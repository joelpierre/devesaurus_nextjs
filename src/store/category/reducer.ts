import { AnyAction } from 'redux';

import { updateObject } from '../../utils';
import { ICategoryStoreState } from '../categories/reducer';
import * as actions from './constants';

const initialState = {} as ICategoryStoreState;

export const categoryReducer = (
  state = initialState,
  action: AnyAction
): ICategoryStoreState => {
  switch (action.type) {
    case actions.GET_CATEGORY_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_CATEGORY_FAILED:
      return action.payload;

    case actions.CLEAR_CATEGORY:
      return initialState;

    default:
      return state;
  }
};

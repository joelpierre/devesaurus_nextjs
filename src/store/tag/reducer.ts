import { AnyAction } from 'redux';

import { updateObject } from '../../utils';
import { ITagStoreState } from '../tags/reducer';
import * as actions from './constants';

const initialState = {} as ITagStoreState;

export const tagReducer = (
  state = initialState,
  action: AnyAction
): ITagStoreState => {
  switch (action.type) {
    case actions.GET_TAG_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_TAG_FAILED:
      return action.payload;

    case actions.CLEAR_TAG:
      return initialState;

    default:
      return state;
  }
};

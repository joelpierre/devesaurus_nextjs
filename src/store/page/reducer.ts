import * as actions from './actions';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';

export interface IPageState {
  title: string;
}

const initialState: IPageState = {
  title: 'Joel is awesome'
};

const pageReducer = (
  state = initialState,
  action: AnyAction
): IPageState => {
  switch (action.type) {
    case actions.GET_PAGE:
      return updateObject(state, action.payload);

    case actions.GET_PAGE_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_PAGE_FAILED:
      return updateObject(state, action.payload);

    default:
      return state;
  }
};

export default pageReducer;

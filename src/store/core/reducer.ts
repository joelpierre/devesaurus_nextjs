import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';
import ConfigProvider from '../../services/configProvider';

export interface ICoreStoreState {
  title: string;
  description: string;
}

const SITE_TITLE = ConfigProvider.getValue('SITE_TITLE');
const SITE_DESCRIPTION = ConfigProvider.getValue('SITE_DESCRIPTION');

const initialState: ICoreStoreState = {
  title: SITE_TITLE || '',
  description: SITE_DESCRIPTION || ''
};

const coreReducer = (
  state = initialState,
  action: AnyAction
): ICoreStoreState => {
  switch (action.type) {
    case actions.GET_SITE_META:
      return updateObject(state, action.payload);

    case actions.GET_SITE_META_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_SITE_META_FAILED:
      return updateObject(state, action.payload);

    default:
      return state;
  }
};

export default coreReducer;

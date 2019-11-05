import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';
import { AxiosError } from 'axios';
import postTransform from './transform';

export interface IPostStoreState {
  id: number;
  title: string;
  slug: string;
  date: string;
  date_modified: string;
  excerpt: string;
  content: string;
  author: string;
  yoast: Core.IYoastMeta;
  terms: any;
  acf: Core.IAcfComponentCore;
  error?: Core.IErrorResponse | AxiosError;
}

const initialState = {};

const postReducer = (
  state = initialState as IPostStoreState,
  action: AnyAction
): IPostStoreState => {
  let updatedState: IPostStoreState;

  switch (action.type) {
    case actions.GET_POST_SUCCESS:
      updatedState = postTransform(action.payload);
      return updateObject(state, updatedState);

    case actions.GET_POST_FAILED:
      return { ...action.payload };

    case actions.CLEAR_POST:
      return {} as any;

    default:
      return state;
  }
};

export default postReducer;

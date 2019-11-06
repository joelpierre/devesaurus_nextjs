import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';
import { postTransform } from './transform';
import { TReduxError } from '@jpp/typings/index';

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
  categories: Core.ITaxonomyTerm[];
  tags: Core.ITaxonomyTerm[];
  acf: Core.IAcfComponentCore;
  error?: TReduxError;
}

const initialState = {
  yoast: {} as Core.IYoastMeta,
  acf: {} as Core.IAcfComponentCore,
  categories: [] as Core.ITaxonomyTerm[],
  tags: [] as Core.ITaxonomyTerm[]
};

const postReducer = (
  state = initialState as IPostStoreState,
  action: AnyAction
): IPostStoreState => {
  switch (action.type) {
    case actions.GET_POST_SUCCESS:
      return updateObject(state, postTransform(action.payload));

    case actions.GET_POST_FAILED:
      return { ...action.payload };

    case actions.CLEAR_POST:
      return {} as any;

    default:
      return state;
  }
};

export default postReducer;

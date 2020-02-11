import * as actions from './constants';
import { updateObject } from '../../utils';
import { AnyAction } from 'redux';
import { TReduxError } from '@jpp/typings/index';

export interface IWordStoreState {
  id: number;
  title: string;
  slug: string;
  author: string;
  author_id: number;
  content: string;
  date: string;
  date_modified: string;
  excerpt: string;
  media: boolean | Core.IMediaSources;
  yoast: Core.IYoastMeta;
  word_categories: Core.ITaxonomyTerm[];
  word_tags: Core.ITaxonomyTerm[];
  acf: Core.IWordAcf;
  error?: TReduxError;
}

const initialState = {
  acf: {} as Core.IWordAcf,
  yoast: {} as Core.IYoastMeta,
  word_categories: [] as Core.ITaxonomyTerm[],
  word_tags: [] as Core.ITaxonomyTerm[]
} as IWordStoreState;

export const wordReducer = (
  state = initialState,
  action: AnyAction
): IWordStoreState => {
  switch (action.type) {
    case actions.GET_WORD_SUCCESS:
      return updateObject(state, action.payload);

    case actions.GET_WORD_FAILED:
      return action.payload;

    case actions.CLEAR_WORD:
      return initialState;

    default:
      return state;
  }
};

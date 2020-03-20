import { AxiosError } from 'axios';
import { NextPageContext } from 'next';

import { ICategoryStoreState } from '../store/categories/reducer';
import { TReduxProps } from '../store/createStore';
import { ITagStoreState } from '../store/tags/reducer';
import { IWordCategoryStoreState } from '../store/word_categories/reducer';
import { IWordTagStoreState } from '../store/word_tags/reducer';

export type TTemplateInitialProps = TReduxProps & NextPageContext;
export type TReduxError = Core.IErrorResponse | AxiosError;
export type TFuncValueVoid<T> = (value: T) => void;
export type TFuncVoid = () => void;
export type TTaxonomyLabel =
  | ICategoryStoreState
  | ITagStoreState
  | IWordTagStoreState
  | IWordCategoryStoreState;

// @ts-ignore
import { NextContext } from 'next';
import { AxiosError } from 'axios';
import { NextJSContext } from 'next-redux-wrapper';

import { TReduxProps } from '../store/createStore';
import { ICategoryStoreState } from '../store/categories/reducer';
import { ITagStoreState } from '../store/tags/reducer';
import { IWordTagStoreState } from '../store/word_tags/reducer';
import { IWordCategoryStoreState } from '../store/word_categories/reducer';

export type TTemplateInitialProps = TReduxProps & NextContext & NextJSContext;
export type TReduxError = Core.IErrorResponse | AxiosError;
export type TFuncValueVoid<T> = (value: T) => void;
export type TFuncVoid = () => void;
export type TTaxonomyLabel = ICategoryStoreState | ITagStoreState | IWordTagStoreState | IWordCategoryStoreState;

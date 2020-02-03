// @ts-ignore
import { NextContext } from 'next';
import { AxiosError } from 'axios';
import { NextJSContext } from 'next-redux-wrapper';

import { TReduxProps } from '../store/createStore';

export type TTemplateInitialProps = TReduxProps & NextContext & NextJSContext;
export type TReduxError = Core.IErrorResponse | AxiosError;
export type TFuncBooleanVoid = (value: boolean) => void;
export type TFuncStringVoid = (value: string) => void;
export type TFuncVoid = () => void;

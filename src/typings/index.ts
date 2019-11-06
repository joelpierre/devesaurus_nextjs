// @ts-ignore
import { NextContext } from 'next';
import { NextJSContext } from 'next-redux-wrapper';

import { TReduxProps } from '../store/createStore';
import { AxiosError } from 'axios';

export type TTemplateInitialProps = TReduxProps & NextContext & NextJSContext;

export type TReduxError = Core.IErrorResponse | AxiosError;

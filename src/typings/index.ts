// @ts-ignore
import { NextContext } from 'next';
import { AxiosError } from 'axios';
import { NextJSContext } from 'next-redux-wrapper';

import { TReduxProps } from '../store/createStore';

export type TTemplateInitialProps = TReduxProps & NextContext & NextJSContext;

export type TReduxError = Core.IErrorResponse | AxiosError;

// @ts-ignore
import { NextContext } from 'next';
import { NextJSContext } from 'next-redux-wrapper';

import { TReduxProps } from '../store/createStore';

export type TPageInitialProps = TReduxProps & NextContext & NextJSContext;

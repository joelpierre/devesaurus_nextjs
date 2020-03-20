import { NextComponentType } from 'next';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import makeStore, { TReduxProps } from '../src/store/createStore';
import { preloadStore } from '../src/store/preloadStore';
import fontAwesomeLib from '../src/utils/fontAwesome';
import './_app.scss';
import ErrorPage from './_error';

interface ICoreAppProps {
  Component: NextComponentType;
  ctx: any;
  store?: any;
}

type TCoreAppProps = ICoreAppProps & TReduxProps;

fontAwesomeLib.init();

class CoreApp extends App<TCoreAppProps> {
  static async getInitialProps({ Component, ctx }: ICoreAppProps) {
    const store = ctx.store;

    if (store) {
      const contentFetched = store.getState().initialFetch;

      if (!contentFetched) {
        await preloadStore(store);
      }
    }

    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  render() {
    const { Component, store, pageProps } = this.props;
    const { initialFetch } = store.getState().core;

    return (
      <Provider store={store}>
        {initialFetch ? (
          <Component {...pageProps} />
        ) : (
          <ErrorPage statusCode={500} />
        )}
      </Provider>
    );
  }
}

export default withRedux(makeStore, {
  debug: false,
})(CoreApp);

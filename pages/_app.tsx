import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { NextComponentType } from 'next';
import withRedux from 'next-redux-wrapper';
import makeStore, { TReduxProps } from '../src/store/createStore';
import { preloadStore } from '../src/store/preloadStore';
import ErrorPage from './_error';
import fontAwesomeLib from '../src/utils/fontAwesome';

import './_app.scss';

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
        : {}
    };
  }

  render() {
    const { Component, store: reduxStore, pageProps } = this.props;
    const { initialFetch } = reduxStore.getState().core;

    return (
      <Provider store={reduxStore}>
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
  debug: false
})(CoreApp);

import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import makeStore, { TReduxProps } from '../src/store/createStore';
import { NextComponentType } from 'next';
import { getSiteMeta } from '../src/store/rootActions';

// import './_app.scss';

interface ICoreApp {
  Component: NextComponentType;
  ctx: any;
  store?: any;
}

class CoreApp extends App<ICoreApp & TReduxProps> {
  static async getInitialProps({ Component, ctx }: ICoreApp) {
    const store: { dispatch: any } = ctx.store;

    if (ctx.store) {
      const siteMetaFetched = ctx.store.getState().core.options;

      if (!siteMetaFetched) {
        await store.dispatch(getSiteMeta());
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

    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore, {
  debug: false
})(CoreApp);

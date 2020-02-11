import React, { PureComponent } from 'react';
import { NextJSContext } from 'next-redux-wrapper';

interface IErrorPage<Q extends NextJSContext = NextJSContext> {
  statusCode?: Core.TErrorCode;
  code?: Core.TErrorCode;
  originalUrl?: string;
  params?: any;
  query?: Q;
}

class Error extends PureComponent<IErrorPage> {
  static getInitialProps({ res, err }: any) {
    const error = err ? err.statusCode : 500;
    const statusCode = res ? res.statusCode : error;
    const { originalUrl, params, query } = res.req;

    return {
      statusCode,
      originalUrl,
      params,
      query
    };
  }

  render() {
    const { statusCode, code } = this.props;

    return (
      <>
        <main id="js-main">
          <h1>Hang on {statusCode || code}</h1>
          <p>
            We can&apos;t find the page you&apos;re looking for.
          </p>
        </main>
      </>
    );
  }
}

export default Error;

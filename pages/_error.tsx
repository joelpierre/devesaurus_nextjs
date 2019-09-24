import React, { PureComponent } from 'react';
import { DefaultQuery } from 'next-server/router';

interface IErrorPage<Q extends DefaultQuery = DefaultQuery> {
  statusCode: number;
  originalUrl: string;
  params: any;
  query: Q;
}

class Error extends PureComponent<IErrorPage> {
  static getInitialProps({ res, err }: any) {

    const error = err ? err.statusCode : null;
    const statusCode = res ? res.statusCode : error;

    const { originalUrl, params, query } = res.req;

    return { statusCode, originalUrl, params, query };
  }

  render() {
    console.log(this.props);

    return (
      <>
        <main id="js-main">
          <h1>Hang on {this.props.statusCode}</h1>
          <p>
            We can&apos;t find the page you&apos;re looking for.
          </p>
        </main>
      </>
    );
  }
}

export default Error;

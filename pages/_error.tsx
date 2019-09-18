import React, { PureComponent } from 'react';

class Error extends PureComponent<any> {
  static getInitialProps({ res, err }: any) {
    const error = err ? err.statusCode : null;
    const statusCode = res ? res.statusCode : error;
    const { originalUrl, params, query } = res.req;
    return { statusCode, originalUrl, params, query };
  }

  render() {
    return (
      <React.Fragment>
        <main id="js-main">
          <h1>Hang on</h1>
          <p>
            We can&apos;t find the page you&apos;re looking for.
          </p>
        </main>
      </React.Fragment>
    );
  }
}

export default Error;

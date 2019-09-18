import React, { PureComponent } from 'react';

interface IHomeProps {

}

export class Home extends PureComponent<IHomeProps> {
  static getInitialProps() {
    return {
      pageProps: {
        joel: 'is awesome'
      }
    };
  }

  render() {
    console.log(this.props);

    return (
      <>
        Joel is awesome
      </>
    );
  }
}

export default Home;

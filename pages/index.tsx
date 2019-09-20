import React, { PureComponent } from 'react';

interface IHomeProps {

}

export class Home extends PureComponent<IHomeProps> {
  static getInitianProps(ctx: any) {

    console.log(ctx);

    return {
      ctx: ctx.query
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

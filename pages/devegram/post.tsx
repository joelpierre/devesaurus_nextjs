import React, { PureComponent } from 'react';

interface IPostTemplate {

}

export class PostTemplate extends PureComponent<IPostTemplate> {
  render() {
    console.log(this.props);
    return (
      <>

      </>
    );
  }
}

export default PostTemplate;

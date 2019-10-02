import React, { PureComponent } from 'react';
import classNames from 'classnames';

interface IPrimaryMain {
  className?: string;
}

export class PrimaryMain extends PureComponent<IPrimaryMain> {
  render() {
    return (
      <main className={classNames(this.props.className)}>
        {this.props.children}
      </main>
    );
  }
}

export default PrimaryMain;

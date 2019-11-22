import React, { PureComponent } from 'react';
import classNames from 'classnames';

interface IPrimaryMainProps {
  className?: string;
}

export class PrimaryMain extends PureComponent<IPrimaryMainProps> {
  render() {
    return (
      <main className={classNames(this.props.className)}>
        {this.props.children}
      </main>
    );
  }
}

export default PrimaryMain;

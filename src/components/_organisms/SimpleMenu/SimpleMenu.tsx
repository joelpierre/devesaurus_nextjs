import React, { PureComponent } from 'react';

import styles from './SimpleMenu.scss';
import classNames from 'classnames';

interface ISimpleMenu {
  className?: string;
  menuItems: Core.IMenuItem[];
}

export class SimpleMenu extends PureComponent<ISimpleMenu> {
  render() {
    const { className } = this.props;

    return (
      <nav className={classNames(className, styles.simpleMenu)}>
        Simple Menu
      </nav>
    );
  }
}

export default SimpleMenu;

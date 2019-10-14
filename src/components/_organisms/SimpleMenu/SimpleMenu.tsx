import React, { PureComponent } from 'react';
import classNames from 'classnames';

import MenuItem, { EIconPosition } from '@jpp/atoms/MenuItem/MenuItem';

import styles from './SimpleMenu.scss';

interface ISimpleMenu {
  className?: string;
  menuItems: Core.IMenuItem[];
}

export class SimpleMenu extends PureComponent<ISimpleMenu> {
  render() {
    const { className, menuItems } = this.props;

    return (
      <nav className={classNames(className, styles.simpleMenu)}>
        <ul className={styles.simpleMenuList}>
          {menuItems.map((menuItem: Core.IMenuItem) => {
            return (
              <MenuItem
                key={`${menuItem.ID}_simple`}
                className={styles.simpleMenuItem}
                iconPosition={EIconPosition.Right}
                linkClassName={styles.simpleMenuLink}
                {...menuItem}
              />
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default SimpleMenu;

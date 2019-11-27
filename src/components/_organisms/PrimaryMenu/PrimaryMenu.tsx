import React, { PureComponent } from 'react';
import classNames from 'classnames';

import MenuItem from '@jpp/atoms/MenuItem/MenuItem';

import styles from './PrimaryMenu.scss';

interface IPrimaryMenu {
  className?: string;
  isMenuOpen: boolean;
  menuItems: Core.IMenuItem[];
  setMenuState: (e: any) => void;
}

export class PrimaryMenu extends PureComponent<IPrimaryMenu> {
  render() {
    const { className, menuItems, setMenuState } = this.props;

    return (
      <nav className={classNames(className, styles.primaryMenu)}>
        <ul className={styles.primaryMenuList}>
          {menuItems.map((menuItem: Core.IMenuItem, index: number) => {
            if (menuItem.title === 'divider') {
              return (
                <li
                  key={`${index}_primary`}
                  className={styles.primaryMenuDivider}
                />
              );
            }

            return (
              <MenuItem
                onClick={setMenuState}
                key={`${index}_primary`}
                className={styles.primaryMenuItem}
                linkClassName={styles.primaryMenuLink}
                {...menuItem}
              />
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default PrimaryMenu;

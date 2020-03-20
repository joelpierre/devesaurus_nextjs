import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import { MenuItem } from '@jpp/atoms/MenuItem/MenuItem';

import styles from './PrimaryMenu.scss';

interface IPrimaryMenuProps {
  className?: string;
  isMenuOpen: boolean;
  menuItems: Core.IMenuItem[];
  setMenuState: (e: any) => void;
}

export const PrimaryMenu: FunctionComponent<IPrimaryMenuProps> = ({
  className,
  menuItems,
  setMenuState,
}) => (
  <nav className={classNames(className, styles.primaryMenu)}>
    <ul className={styles.primaryMenuList}>
      {menuItems.map((menuItem: Core.IMenuItem, index: number) => {
        if (menuItem.title === 'divider') {
          return (
            <li
              key={`${index}_menu-divider`}
              className={styles.primaryMenuDivider}
            />
          );
        }

        return (
          <MenuItem
            onClick={setMenuState}
            key={`${index}_menu-item`}
            className={styles.primaryMenuItem}
            linkClassName={styles.primaryMenuLink}
            {...menuItem}
          />
        );
      })}
    </ul>
  </nav>
);

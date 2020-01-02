import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { MenuItem, EIconPosition } from '@jpp/atoms/MenuItem/MenuItem';

import styles from './SimpleMenu.scss';

interface ISimpleMenuProps {
  className?: string;
  menuItems: Core.IMenuItem[];
}

export const SimpleMenu: FunctionComponent<ISimpleMenuProps> = (
  {
    className,
    menuItems
  }
) => {

  return (
    <nav className={classNames(className, styles.simpleMenu)}>
      <ul className={styles.simpleMenuList}>
        {menuItems.map((menuItem: Core.IMenuItem, index: number) => (
          <MenuItem
            key={`${index}_simple`}
            className={styles.simpleMenuItem}
            iconPosition={EIconPosition.Right}
            linkClassName={styles.simpleMenuLink}
            {...menuItem}
          />
        ))}
      </ul>
    </nav>
  );
};

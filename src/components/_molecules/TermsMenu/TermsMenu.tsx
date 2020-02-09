import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './TermsMenu.scss';
import AnchorLink from '@jpp/atoms/AnchorLink/AnchorLink';

export interface ITermsMenuProps {
  className?: string;

}

export interface IStoreTermsMenuProps {
  termsMenu: Core.IMenuItem[];
}

export type TTermsMenu = ITermsMenuProps & IStoreTermsMenuProps;

export const TermsMenu: FunctionComponent<TTermsMenu> = (
  {
    className,
    termsMenu
  }
) => {
  return (
    <ul className={classNames(styles.TermsMenu, className)}>
      {termsMenu.map((menuItem, index) => (
        <li key={index} className={styles.TermsMenu__item}>
          <AnchorLink link={menuItem.slug}>
            {menuItem.title}
          </AnchorLink>
        </li>
      ))}
    </ul>
  );
};

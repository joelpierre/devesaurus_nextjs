import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { MenuItem } from '@jpp/atoms/MenuItem/MenuItem';
import styles from './FooterMenu.scss';

export interface IFooterMenuProps {
  className?: string;
}

export interface IStoreFooterMenuProps {
  footerMenu: Core.IMenuItem[];
}

type TFooterMenu = IFooterMenuProps & IStoreFooterMenuProps;

export const FooterMenu: FunctionComponent<TFooterMenu> = (
  { className, footerMenu }
) => (
  <section
    className={classNames(className, styles.FooterMenu)}
  >
    <ul
      className={classNames(styles.FooterMenu__list)}
    >
      {footerMenu.map(({ title, slug }, index) => {
        return (
          <MenuItem
            key={index}
            className={styles.FooterMenu__item}
            linkClassName={styles.FooterMenu__link}
            title={title}
            slug={slug}
          />
        );
      })}
    </ul>
  </section>
);

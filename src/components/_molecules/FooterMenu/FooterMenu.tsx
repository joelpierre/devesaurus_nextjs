import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import AnchorLink from '@jpp/atoms/AnchorLink/AnchorLink';
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
      {footerMenu.map((item, index) => {
        return (
          <li
            key={index}
            className={classNames(styles.FooterMenu__item)}
          >
            <AnchorLink
              link={item.slug}
              className={classNames(styles.FooterMenu__link)}
            >
              {item.title}
            </AnchorLink>
          </li>
        );
      })}
    </ul>
  </section>
);

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import SocialItem from '@jpp/atoms/SocialItem/SocialItem';

import styles from './SocialMenu.scss';

export interface ISocialMenuProps {
  className?: string;
}

export interface IStoreSocialMenuProps {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  youtube: string;
}

type TSocialMenu = ISocialMenuProps & IStoreSocialMenuProps;

export const SocialMenu: FunctionComponent<TSocialMenu> = (
  {
    className,
    facebook,
    twitter,
    linkedin,
    instagram,
    youtube
  }
) => {
  const defaultProps = {
    className: styles['social-menu__item']
  };

  return (
    <nav
      data-test="component-social-menu"
      className={classNames(styles['social-menu'], className)}
    >
      <ul className={styles['social-menu__list']}>
        {facebook && (
          <SocialItem
            {...defaultProps}
            name="facebook"
            link={facebook}
          />
        )}

        {twitter && (
          <SocialItem
            {...defaultProps}
            name="twitter"
            link={twitter}
          />
        )}

        {instagram && (
          <SocialItem
            {...defaultProps}
            name="instagram"
            link={instagram}
          />
        )}

        {linkedin && (
          <SocialItem
            {...defaultProps}
            name="linkedin"
            link={linkedin}
          />
        )}

        {youtube && (
          <SocialItem
            {...defaultProps}
            name="youtube"
            link={youtube}
          />
        )}
      </ul>
    </nav>
  );
};

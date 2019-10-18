import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import SocialItem from '@jpp/atoms/SocialItem/SocialItem';

import styles from './SocialMenu.scss';

interface ISocialMenu {
  className?: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  youtube: string;
}

const SocialMenu: FunctionComponent<ISocialMenu> = (
  {
    className,
    facebook,
    twitter,
    linkedin,
    instagram,
    youtube
  }
) => {
  return (
    <nav
      data-test="component-social-menu"
      className={classNames(styles['social-menu'], className)}
    >
      <ul className={styles['social-menu__list']}>
        {facebook && (
          <SocialItem
            className={styles['social-menu__item']}
            name="facebook"
            link={facebook}
          />
        )}

        {twitter && (
          <SocialItem
            className={styles['social-menu__item']}
            name="twitter"
            link={twitter}
          />
        )}

        {instagram && (
          <SocialItem
            className={styles['social-menu__item']}
            name="instagram"
            link={instagram}
          />
        )}

        {linkedin && (
          <SocialItem
            className={styles['social-menu__item']}
            name="linkedin"
            link={linkedin}
          />
        )}

        {youtube && (
          <SocialItem
            className={styles['social-menu__item']}
            name="youtube"
            link={youtube}
          />
        )}
      </ul>
    </nav>
  );
};

export default SocialMenu;

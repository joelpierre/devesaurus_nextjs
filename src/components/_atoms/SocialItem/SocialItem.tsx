import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SocialItem.scss';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { EFontAwesomeType } from '../../../utils/fontAwesome';

interface ISocialItemProps {
  className?: string;
  name: IconName;
  link: string;
  onClick: Core.TOnClick;
}

const SocialItem: FunctionComponent<Partial<ISocialItemProps>> = (
  {
    name,
    link,
    onClick,
    className
  }
) => {
  let iconName: IconName;

  switch (name) {
    case 'facebook':
      iconName = 'facebook-square';
      break;
    case 'linkedin':
      iconName = 'linkedin';
      break;

    case 'twitter':
      iconName = 'twitter-square';
      break;

    case 'youtube':
      iconName = 'youtube-square';
      break;

    default:
      iconName = name as IconName;
  }

  return (
    <li
      className={classNames(
        styles['social-item'],
        className,
        styles['social-item--theme-gradient-brand']
      )}
      data-test="component-social-item"
    >
      <a
        data-test="social-item-link"
        className={styles['social-item__link']}
        href={link}
        aria-label={name}
        target="_blank"
        onClick={onClick}
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          data-test="social-item-icon"
          className={styles.socialItemIcon}
          icon={[EFontAwesomeType.brand, iconName]}
        />
      </a>
    </li>
  );
};

export default SocialItem;

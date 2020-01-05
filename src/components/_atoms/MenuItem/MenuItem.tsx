import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import { EFontAwesomeType } from '../../../utils/fontAwesome';
import { getDynamicAs, getDynamicPage } from '../../../utils/index';

import styles from './MenuItem.scss';

interface IMenuItemProps {
  className?: string;
  linkClassName?: string;
  onClick?: Core.TOnClick;
  iconPosition?: EIconPosition;
}

export enum EIconPosition {
  Left = 'left',
  Right = 'right'
}

type TMenuItemProps = IMenuItemProps & Core.IMenuItem;

export const MenuItem: FunctionComponent<TMenuItemProps> = (
  {
    className,
    linkClassName,
    iconPosition = EIconPosition.Left,
    title,
    classes,
    slug,
    url,
    onClick
  }
) => {

  if (title === 'divider') {
    return null;
  }

  const elClasses = classNames(styles.menuItemLink, linkClassName);
  const excludedClasses = ['external', 'divider'];
  const updatedClasses = classes.filter((classItem: string) => !excludedClasses.includes(classItem));
  const iconName = updatedClasses && updatedClasses[0];
  const iconClasses = classNames(styles.menuItemIcon, {
    [styles.menuItemIconRed]: iconName === 'heart'
  });

  const getIconPrefix = (): EFontAwesomeType => {
    switch (iconName) {
      case 'heart':
      case 'phone':
      case 'hands-helping':
        return EFontAwesomeType.solid;
      default:
        return EFontAwesomeType.regular;
    }
  };

  const getContent = (): JSX.Element => (
    <div
      className={classNames(styles.menuItemContent, {
        [styles.menuItemContentHasIcon]: !!iconName
      })}
    >
      {!!iconName && (
        <FontAwesomeIcon
          className={iconClasses}
          icon={[getIconPrefix(), iconName as IconName]}
        />
      )}
      <span className={styles.menuItemText}>{title}</span>
    </div>
  );

  const getEl = () => {
    if (classes.includes('external')) {
      return (
        <a
          href={url}
          target="_blank"
          className={elClasses}
        >
          {getContent()}
        </a>
      );
    }

    return (
      <Link
        href={getDynamicPage(slug)}
        as={getDynamicAs(slug)}
      >
        <a
          className={elClasses}
        >
          {getContent()}
        </a>
      </Link>
    );
  };

  return (
    <li
      role={!classes.includes('external') && onClick ? 'button' : undefined}
      onClick={!classes.includes('external') ? onClick : undefined}
      className={classNames(
        styles.menuItem,
        className,
        {
          [styles.menuItemIconLeft]: iconPosition === EIconPosition.Left && !!iconName,
          [styles.menuItemIconRight]: iconPosition === EIconPosition.Right && !!iconName
        })
      }
    >
      {getEl()}
    </li>
  );
};

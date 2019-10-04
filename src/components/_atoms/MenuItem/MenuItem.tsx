import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import { EFontAwesomeType } from '../../../utils/fontAwesome';

import styles from './MenuItem.scss';

interface IMenuItem extends Core.IMenuItem {
  className?: string;
  linkClassName?: string;
  onClick: Core.TOnClick;
}

const MenuItem: FunctionComponent<IMenuItem> = ({ className, linkClassName, title, classes, slug, url, onClick }) => {

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
        return EFontAwesomeType.solid;
      default:
        return EFontAwesomeType.regular;
    }
  };

  const getContent = (): JSX.Element => (
    <>
      {iconName && (
        <FontAwesomeIcon
          className={iconClasses}
          icon={[getIconPrefix(), iconName as IconName]}
        />
      )} {title}
    </>
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
        href="/[slug]"
        as={`/${slug}`}
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
    <li role="button" onClick={onClick} className={classNames(styles.menuItem, className)}>
      {getEl()}
    </li>
  );

};

export default MenuItem;

import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { EPageType, ESize, ETheme } from '@jpp/typings/enums';
import { getDynamicAs, getDynamicPage } from '../../../utils';

import styles from './Button.scss';

interface IButtonProps {
  theme?: Core.TTheme;
  size?: Core.TSize;
  behaviour?: Core.TLinkBehaviour;
  caps?: boolean;
  className?: string;
  onClick?: Core.TOnClick;
  type?: Core.TLinkType;
  as?: string;
  link?: string;
  outline?: boolean;
  tabIndex?: number;
  icon?: IButtonIcon;
  pageType?: EPageType;
}

interface IButtonIcon {
  weight: Core.TFaIconWeight;
  name: IconName;
}

export const Button: FunctionComponent<IButtonProps> = (
  {
    behaviour = 'router',
    theme = ETheme.TintAlpha,
    size = ESize.Md,
    caps = false,
    outline = false,
    children,
    link,
    className,
    as,
    type,
    onClick,
    icon,
    pageType = EPageType.Page,
    ...props
  }
) => {
  const defaultProps: Partial<IButtonProps> = {
    className: classNames([
      styles.btn,
      styles[`btn--${size}`],
      {
        [styles[`btn--${theme}`]]: !!theme,
        [styles[`btn--outline`]]: outline,
        [styles[`btn--capitalise`]]: caps
      },
      className
    ]),
    onClick,
    ...props
  };

  const getContent = (
    <>
      <span className={styles.btnContent}>
        {children && (
          <span
            className={classNames(styles.btnText, {
              [styles.btnTextWithIcon]: !!icon
            })}
          >
            {children}
          </span>
        )}
        {icon && (
          <span className={styles.btnIconWrapper}>
            <FontAwesomeIcon icon={[icon.weight, icon.name]} />
          </span>
        )}
      </span>
    </>
  );

  switch (behaviour) {
    case 'anchor':
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer nofollow"
          {...defaultProps}
        >
          {getContent}
        </a>
      );

    case 'action':
      return (
        <button type={type || 'button'} {...defaultProps}>
          {getContent}
        </button>
      );

    case 'router':
    default:
      return (
        <Link href={as ? as : getDynamicPage(pageType)} as={getDynamicAs(pageType, link)}>
          <a {...defaultProps}>
            {getContent}
          </a>
        </Link>
      );
  }
};

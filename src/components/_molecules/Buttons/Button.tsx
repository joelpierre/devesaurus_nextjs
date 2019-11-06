import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { IconName } from '@fortawesome/fontawesome-common-types';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './Button.scss';
import { ESize, ETheme } from '@jpp/typings/enums';

export interface IButtonProps {
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
  icon?: {
    weight: 'fab' | 'far' | 'fal' | 'fas' | 'fad';
    name: IconName;
  };
}

const Button: FunctionComponent<IButtonProps> = (
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
    ...props
  }
) => {
  let button: JSX.Element;

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

  const content = (
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
            <FontAwesomeIcon icon={[icon.weight, icon.name]}/>
          </span>
        )}
      </span>
    </>
  );

  switch (behaviour) {
    case 'anchor':
      button = (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer nofollow"
          {...defaultProps}
        >
          {content}
        </a>
      );
      break;

    case 'action':
      button = (
        <button type={type || 'button'} {...defaultProps}>
          {content}
        </button>
      );
      break;

    case 'router':
    default:
      button = (
        <Link href={as!} as={link}>
          <a {...defaultProps}>
            {content}
          </a>
        </Link>
      );
      break;
  }

  return button;
};

export default Button;

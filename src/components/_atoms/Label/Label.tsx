import React, { FunctionComponent } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

import styles from './Label.scss';

interface ILabelProps {
  className?: string;
  caps?: boolean;
  size?: Core.TSize;
  theme?: Core.TTheme;
  link?: string;
  as?: string;
}

export const Label: FunctionComponent<ILabelProps> = (
  { children, link, theme, size, caps, className, as }
) => {

  const defaultProps = {
    className: classNames(
      [
        styles.label,
        styles[`label--${theme}`],
        styles[`label--${size}`],
        { [styles[`label--capitalise`]]: caps },
        className
      ]
    )
  };

  if (link && as) {
    return (
      <Link
        href={as}
        as={link}
      >
        <a
          {...defaultProps}
        >
          <span className={classNames(styles.label__text)}>{children}</span>
        </a>
      </Link>
    );
  }

  return (
    <span
      {...defaultProps}
    >
      <span className={classNames(styles.label__text)}>{children}</span>
    </span>
  );
};

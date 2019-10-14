import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './Label.scss';

interface ILabel {
  link: string;
  theme: Core.TTheme;
  size: Core.TSize;
  caps: boolean;
  className?: string;
}

const Label: FunctionComponent<ILabel> = (
  { children, link, theme, size, caps, className }
) => {
  const defaultProps = {
    className: classNames([
      styles.label,
      styles[`label--${theme}`],
      styles[`label--${size}`],
      { [styles[`label--capitalise`]]: caps },
      className
    ])
  };

  return link ? (
    <Link
      href={link}
    >
      <a
        {...defaultProps}
      >
        <span className={classNames(styles.label__text)}>{children}</span>
      </a>
    </Link>
  ) : (
    <span
      {...defaultProps}
    >
      <span className={classNames(styles.label__text)}>{children}</span>
    </span>
  );
};

export default Label;

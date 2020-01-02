import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './Hamburger.scss';

interface HamburgerInterface {
  isMenuOpen?: boolean;
  className?: string;
  descriptor?: string;
  theme?: Core.TTheme;
  onClick: Core.TOnClick;
  reverse?: boolean;
  alt?: boolean;
}

export const Hamburger: FunctionComponent<HamburgerInterface> = (
  {
    descriptor = 'Menu',
    className,
    theme = 'tint-alpha',
    reverse = false,
    isMenuOpen,
    onClick,
    alt = false
  }
) => {
  return (
    <button
      type="button"
      className={classNames(
        styles.hamburger,
        {
          [styles.hamburgerIsActive]: isMenuOpen,
          [styles.hamburgerReverse]: reverse,
          [styles.hamburgerAlt]: alt
        },
        className
      )}
      onClick={onClick}
    >
      <span
        className={classNames(
          styles.hamburgerLine,
          styles[`hamburger__line-theme--${theme}`]
        )}
      />
      <span
        className={classNames(
          styles.hamburgerLine,
          styles[`hamburger__line-theme--${theme}`]
        )}
      />
      <span
        className={classNames(
          styles.hamburgerLine,
          styles[`hamburger__line-theme--${theme}`]
        )}
      />
      <span className={styles.hamburger__descriptor}>{descriptor}</span>
    </button>
  );
};

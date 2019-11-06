import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import Icon from '@jpp/atoms/Icon/Icon';

import styles from './OffCanvasHeader.scss';

interface IOffCanvasHeader {
  className?: string;
  isMenuOpen: boolean;
  setMenuState: (value: boolean) => void;
}

const OffCanvasHeader: FunctionComponent<IOffCanvasHeader> = ({ className, setMenuState, isMenuOpen }) => {

  const handleSetMenuState = (event) => {
    setMenuState(!isMenuOpen);
    event.preventDefault();
  };

  return (
    <header className={classNames(styles.offCanvasHeader, className)}>
      <Link href="/" as="/">
        <a role="button" onClick={handleSetMenuState}>
          <Icon.LogoCharacter className={styles.offCanvasHeaderLogo}/>
        </a>
      </Link>
    </header>
  );
};

export default OffCanvasHeader;

import { TFuncBooleanVoid } from '@jpp/typings/index';
import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Router from 'next/router';

import Icon from '@jpp/atoms/Icon/Icon';

import styles from './OffCanvasHeader.scss';

interface IOffCanvasHeader {
  className?: string;
  isMenuOpen: boolean;
  setMenuState: TFuncBooleanVoid;
}

const OffCanvasHeader: FunctionComponent<IOffCanvasHeader> = (
  { className, setMenuState, isMenuOpen }
) => {

  const handleSetMenuState = (event) => {
    setMenuState(!isMenuOpen);
    Router.push('/');
    event.preventDefault();
  };

  return (
    <header className={classNames(styles.offCanvasHeader, className)}>
      <Link href="/" as="/">
        <a role="button" onClick={handleSetMenuState}>
          <Icon.LogoCharacter className={styles.offCanvasHeaderLogo} />
        </a>
      </Link>
    </header>
  );
};

export default OffCanvasHeader;

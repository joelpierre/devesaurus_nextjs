import React, { FunctionComponent } from 'react';
import { AnyAction } from 'redux';
import classNames from 'classnames';

import styles from './PushWrapper.module.scss';

interface IPushWrapper {
  className?: string;
  isMenuOpen: boolean;
  setMenuState: (value: boolean) => AnyAction;
}

const PushWrapper: FunctionComponent<IPushWrapper> = ({ className, children, setMenuState }) => {
  return (
    <div className={classNames(styles.pushWrapper, className)}>
      {children}
    </div>
  );
};

export default PushWrapper;

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './PushWrapper.module.scss';

interface IPushWrapper {
  className?: string;
  isMenuOpen: boolean;
}

const PushWrapper: FunctionComponent<IPushWrapper> = ({ className, children }) => {
  return (
    <div className={classNames(styles.pushWrapper, className)}>
      {children}
    </div>
  );
};

export default PushWrapper;

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './PushWrapper.scss';

interface IPushWrapperProps {
  className?: string;
  isMenuOpen: boolean;
  setMenuState: (value: boolean) => void;
}

const PushWrapper: FunctionComponent<IPushWrapperProps> = ({ className, children, isMenuOpen, setMenuState }) => {
  return (
    <div className={classNames(styles.pushWrapper, className, {
      [styles.pushWrapperIsActive]: isMenuOpen
    })}>
      {children}
    </div>
  );
};

export default PushWrapper;

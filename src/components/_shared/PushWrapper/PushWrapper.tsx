import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import { TFuncValueVoid } from '@jpp/typings/index';

import styles from './PushWrapper.scss';

interface IPushWrapperProps {
  className?: string;
  isMenuOpen: boolean;
  setMenuState: TFuncValueVoid<boolean>;
}

export const PushWrapper: FunctionComponent<IPushWrapperProps> = ({
  className,
  children,
  isMenuOpen,
}) => {
  return (
    <div
      className={classNames(styles.pushWrapper, className, {
        [styles.pushWrapperIsActive]: isMenuOpen,
      })}
    >
      {children}
    </div>
  );
};

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './OffCanvasHeader.module.scss';
import Icon from '@jpp/atoms/Icon/Icon';

interface IOffCanvasHeader {
  className?: string;
}

const OffCanvasHeader: FunctionComponent<IOffCanvasHeader> = ({ className }) => {
  return (
    <header className={classNames(styles.offCanvasHeader, className)}>
      OffCanvasHeader

      <Icon.Logo />
    </header>
  );
};

export default OffCanvasHeader;

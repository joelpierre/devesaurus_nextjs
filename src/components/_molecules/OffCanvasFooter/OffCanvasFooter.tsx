import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './OffCanvasFooter.module.scss';

interface IOffCanvasFooter {
  className?: string;
}

const OffCanvasFooter: FunctionComponent<IOffCanvasFooter> = ({ className }) => {
  return (
    <footer className={classNames(styles.offCanvasFooter, className)}>
      OffCanvasFooter
    </footer>
  );
};

export default OffCanvasFooter;

import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import SocialMenu from '@jpp/organisms/SocialMenu';

import styles from './OffCanvasFooter.scss';

interface IOffCanvasFooter {
  className?: string;
}

const OffCanvasFooter: FunctionComponent<IOffCanvasFooter> = ({
  className,
}) => {
  return (
    <footer className={classNames(styles.offCanvasFooter, className)}>
      <SocialMenu className={styles.offCanvasFooterSocial} />
    </footer>
  );
};

export default OffCanvasFooter;

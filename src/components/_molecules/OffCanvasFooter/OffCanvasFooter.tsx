import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import SocialMenuContainer from '../../../containers/SocialMenuContainer';

import styles from './OffCanvasFooter.scss';

interface IOffCanvasFooter {
  className?: string;
}

const OffCanvasFooter: FunctionComponent<IOffCanvasFooter> = ({ className }) => {
  return (
    <footer className={classNames(styles.offCanvasFooter, className)}>
      <SocialMenuContainer className={styles.offCanvasFooterSocial}/>
    </footer>
  );
};

export default OffCanvasFooter;

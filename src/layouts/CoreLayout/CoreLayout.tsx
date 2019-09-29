import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './CoreLayout.module.scss';

interface ICoreLayout {
  className?: string;
}

const CoreLayout: FunctionComponent<ICoreLayout> = ({ className, children }) => (
  <>
    <header className={classNames(className, styles.coreLayoutHeader)}>
      Some header stuff here
    </header>

    <main>
      {children}
    </main>

    <footer>
      Some footer stuff here
    </footer>
  </>
);

export default CoreLayout;

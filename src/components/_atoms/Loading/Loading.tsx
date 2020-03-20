import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import styles from './Loading.scss';

interface ILoadingProps {
  className?: string;
  theme: Core.TTheme;
}

const Loading: FunctionComponent<ILoadingProps> = ({ className, theme }) => {
  return (
    <div className={classNames(styles.loading, className)}>
      <span
        className={classNames(
          styles.loadingElement,
          styles[`loading__element--${theme}`]
        )}
      />
      <span
        className={classNames(
          styles.loadingElement,
          styles[`loading__element--${theme}`]
        )}
      />
      <span
        className={classNames(
          styles.loadingElement,
          styles[`loading__element--${theme}`]
        )}
      />
    </div>
  );
};

export default Loading;

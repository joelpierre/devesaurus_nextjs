import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import { ETheme } from '@jpp/typings/enums';

import styles from './ScrollingMouse.scss';

interface IScrollingMouseProps {
  className?: string;
  theme?: Core.TTheme;
}

export const ScrollingMouse: FunctionComponent<IScrollingMouseProps> = ({
  className,
  theme = ETheme.Brand,
}) => {
  return (
    <div className={classNames(styles.ScrollingMouse, className)}>
      <div
        className={classNames(
          styles.mouse,
          className,
          styles[`ScrollingMouse__border--${theme}`]
        )}
      >
        <div
          className={classNames(
            styles['ScrollingMouse__scroll-wheel'],
            styles[`ScrollingMouse__theme--${theme}`]
          )}
        />
      </div>
    </div>
  );
};

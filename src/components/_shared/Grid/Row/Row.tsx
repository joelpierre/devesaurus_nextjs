import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import styles from './Row.scss';

interface RowInterface {
  row?: boolean;
  column?: boolean;
  reverse?: boolean;
  className?: string;
}

const Row: FunctionComponent<RowInterface> = (
  {
    children,
    row = true,
    column = false,
    reverse = false,
    className,
    ...props
  }) => {
  return (
    <div
      data-test="component-grid-row"
      className={classNames([
        className,
        {
          [styles.row]: row,
          [styles.rowReverse]: row && reverse && !column,
          [styles.rowColumn]: column && !reverse,
          [styles.rowColumnReverse]: column && reverse && !row
        }
      ])}
      {...props}
    >
      {children}
    </div>
  );
};

export default Row;

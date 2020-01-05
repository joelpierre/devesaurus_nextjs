import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import styles from './Row.scss';

interface RowInterface {
  row?: boolean;
  column?: boolean;
  reverse?: boolean;
  className?: string;
  tagElement?: Core.TTag;
}

export const Row: FunctionComponent<RowInterface> = (
  {
    children,
    row = true,
    column = false,
    reverse = false,
    className,
    tagElement = 'div',
    ...props
  }) => {
  const Tag: any = `${tagElement}`;

  return (
    <Tag
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
    </Tag>
  );
};

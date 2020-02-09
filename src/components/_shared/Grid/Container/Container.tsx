import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './Container.scss';

interface IContainerProps {
  fluid?: boolean;
  className?: string;
  tagElement?: Core.TTag;
}

export const Container: FunctionComponent<IContainerProps> = (
  {
    fluid = false,
    children,
    className,
    tagElement = 'div',
    ...props
  }) => {
  const Tag: any = `${tagElement}`;

  return (
    <Tag
      data-test="component-grid-container"
      className={classNames(
        {
          [styles.container]: !fluid,
          [styles.containerFluid]: fluid
        },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

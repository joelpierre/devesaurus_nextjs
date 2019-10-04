import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './Container.scss';

interface ContainerInterface {
  fluid?: boolean;
  className?: string;
  type?: Core.TTag;
}

const Container: FunctionComponent<ContainerInterface> = (
  {
    fluid = true,
    children,
    className,
    type = 'div',
    ...props
  }) => {
  const Tag: any = `${type}`;

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

export default Container;

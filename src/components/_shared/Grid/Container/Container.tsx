import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './Container.scss';

interface ContainerInterface {
  fluid?: boolean;
  className?: string;
  tagElement?: Core.TTag;
}

const Container: FunctionComponent<ContainerInterface> = (
  {
    fluid = true,
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

export default Container;

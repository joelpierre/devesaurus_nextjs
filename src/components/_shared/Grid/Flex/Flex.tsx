import React, { CSSProperties, FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './Flex.scss';

interface IFlexProps {
  style: CSSProperties;
  className: string;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  col?: Core.TColumn;
  colXs?: Core.TColumn;
  colSm?: Core.TColumn;
  colMd?: Core.TColumn;
  colLg?: Core.TColumn;
  colXl?: Core.TColumn;
  auto?: boolean;
  type?: Core.TTag;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const Flex: FunctionComponent<Partial<IFlexProps>> = (
  {
    children,
    auto = false,
    type = 'div',
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    col,
    colXs,
    colSm,
    colMd,
    colLg,
    colXl,
    ...props
  }) => {
  const Tag: any = `${type}`;

  const combinedClasses = {
    [styles.flex]: !col,
    [styles.flexAuto]: auto,
    [styles.flexXs]: xs,
    [styles.flexSm]: sm,
    [styles.flexMd]: md,
    [styles.flexLg]: lg,
    [styles.flexXl]: xl,
    [styles[`flex${col}`]]: !!col,
    [styles[`flexXs${colXs}`]]: !!colXs,
    [styles[`flexSm${colSm}`]]: !!colSm,
    [styles[`flexMd${colMd}`]]: !!colMd,
    [styles[`flexLg${colLg}`]]: !!colLg,
    [styles[`flexXl${colXl}`]]: !!colXl
  };

  return (
    <Tag
      data-test="component-flex"
      {...props}
      className={classNames(className, combinedClasses)}
    >
      {children}
    </Tag>
  );
};

export default Flex;
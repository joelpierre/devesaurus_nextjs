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
  tagElement?: Core.TTag;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

export const Flex: FunctionComponent<Partial<IFlexProps>> = (
  {
    children,
    auto = false,
    tagElement = 'section',
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

  const Tag = `${tagElement}` as any;

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
      {...props}
      className={classNames(className, combinedClasses)}
    >
      {children}
    </Tag>
  );
};

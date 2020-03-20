import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

interface IPrimaryMainProps {
  className?: string;
}

export const PrimaryMain: FunctionComponent<IPrimaryMainProps> = ({
  className,
  children,
}) => {
  return <main className={classNames(className)}>{children}</main>;
};

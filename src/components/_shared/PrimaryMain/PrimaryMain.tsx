import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

interface IPrimaryMainProps {
  className?: string;
}

export const PrimaryMain: FunctionComponent<IPrimaryMainProps> = (
  { className, children }
) => {
  return (
    <main className={classNames(className)}>
      {children}
    </main>
  );
};

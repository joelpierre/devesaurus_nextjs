import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './WYSIWYG.scss';

interface IWYSIWYGProps {
  className?: string;
  content: string;
}

export const WYSIWYG: FunctionComponent<IWYSIWYGProps> = (
  {
    className,
    children,
    content
  }
) => {
  if (children) {
    return <div className={classNames(className, 'WYSIWYG')}>{children}</div>;
  }

  return (
    <div
      className={classNames(className, 'WYSIWYG')}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

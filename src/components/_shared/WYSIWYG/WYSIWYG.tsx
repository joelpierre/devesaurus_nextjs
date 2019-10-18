import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './WYSIWYG.scss';

interface IWYSIWYGProps {
  className?: string;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const WYSIWYG: FunctionComponent<IWYSIWYGProps> = ({
  className,
  children,
  dangerouslySetInnerHTML,
}) => {
  if (children) {
    return <div className={classNames(className, 'WYSIWYG')}>{children}</div>;
  }

  return (
    <div
      className={classNames(className, 'WYSIWYG')}
      dangerouslySetInnerHTML={{ ...dangerouslySetInnerHTML! }}
    />
  );
};

export default WYSIWYG;

import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './WYSIWYG.scss';

interface IWYSIWYGProps {
  className?: string;
  textCenter?: boolean;
  content: string;
}

export const WYSIWYG: FunctionComponent<IWYSIWYGProps> = ({
  className,
  textCenter = false,
  content,
}) => {
  return (
    <div
      className={classNames(className, 'WYSIWYG', {
        'WYSIWYG--text-center': textCenter,
      })}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

import classNames from 'classnames';
import React, { CSSProperties, FunctionComponent } from 'react';

import { EPriority } from '@jpp/typings/enums';

import styles from './Heading.scss';

interface IHeadingProps {
  priority: Core.TPriority;
  className: string;
  style: CSSProperties;
  innerHTML: boolean;
}

export const Heading: FunctionComponent<Partial<IHeadingProps>> = ({
  priority = EPriority.One,
  children,
  className,
  style,
  innerHTML = true,
}) => {
  const Tag: any = `h${priority}`;
  const defaultProps = {
    className: classNames([`${styles[`heading-${priority}`]}`, className]),
    style,
  };

  if (innerHTML) {
    return (
      <Tag {...defaultProps} dangerouslySetInnerHTML={{ __html: children }} />
    );
  }

  return <Tag {...defaultProps}>{children}</Tag>;
};

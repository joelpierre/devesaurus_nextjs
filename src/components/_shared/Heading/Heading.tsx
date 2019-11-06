import React, { CSSProperties, FunctionComponent } from 'react';
import classNames from 'classnames';
import styles from './Heading.scss';
import { EPriority } from '@jpp/typings/enums';

interface IHeadingProps {
  priority: Core.TPriority;
  className: string;
  style: CSSProperties;
  innerHTML: boolean;
}

const Heading: FunctionComponent<Partial<IHeadingProps>> = (
  {
    priority = EPriority.One,
    children,
    className,
    style,
    innerHTML = true
  }
) => {
  const Tag: any = `h${priority}`;
  const defaultProps = {
    'data-test': 'component-heading',
    className: classNames([`${styles[`heading-${priority}`]}`, className]),
    style
  };

  if (innerHTML) {
    return (
      <Tag {...defaultProps} dangerouslySetInnerHTML={{ __html: children }}/>
    );
  }

  return <Tag {...defaultProps}>{children}</Tag>;
};

export default Heading;

import React, { CSSProperties, FunctionComponent } from 'react';
import classNames from 'classnames';
import { TPriority } from 'src/utils/types';
import styles from './Heading.scss';

interface IHeadingProps {
  priority: TPriority;
  className: string;
  style: CSSProperties;
  innerHTML: boolean;
}

const Heading: FunctionComponent<Partial<IHeadingProps>> = ({
  priority = 1,
  children,
  className,
  style,
  innerHTML = true,
}) => {
  const Tag: any = `h${priority}`;
  const defaultProps = {
    'data-test': 'component-heading',
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

export default Heading;

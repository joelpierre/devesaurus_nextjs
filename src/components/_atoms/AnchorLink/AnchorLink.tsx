import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import styles from './AnchorLink.scss';

interface IAnchorLinkProps {
  className?: string;
  link: string;
  as: string;
  behaviour?: Core.TLinkBehaviour;
  onClick?: Core.TOnClick;
}

const AnchorLink: FunctionComponent<IAnchorLinkProps> = (
  {
    children,
    className,
    behaviour = 'router',
    link,
    as,
    onClick
  }
) => {
  let Tag: JSX.Element;

  const defaultProps = {
    'data-test': 'component-anchor-link',
    className: classNames(styles.anchorLink, className),
    onClick
  };

  switch (behaviour) {
    case 'anchor':
      Tag = (
        <a href={link} {...defaultProps} >
          {children}
        </a>
      );
      break;
    default:
    case 'router':
      Tag = (
        <Link href={link} as={as} {...defaultProps}>
          {children}
        </Link>
      );
      break;
  }

  return Tag;
};

export default AnchorLink;

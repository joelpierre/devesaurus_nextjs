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
  let Element: JSX.Element;

  const defaultProps = {
    'data-test': 'component-anchor-link',
    className: classNames(styles.anchorLink, className),
    onClick
  };

  switch (behaviour) {
    case 'anchor':
      Element = (
        <a href={link} {...defaultProps} >
          {children}
        </a>
      );
      break;
    default:
    case 'router':
      Element = (
        <Link href={link} as={as} {...defaultProps}>
          {children}
        </Link>
      );
      break;
  }

  return Element;
};

export default AnchorLink;

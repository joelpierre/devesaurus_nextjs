import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { EPageType } from '@jpp/typings/enums';
import { getDynamicAs, getDynamicPage } from '../../../utils';
import styles from './AnchorLink.scss';

interface IAnchorLinkProps {
  className?: string;
  link: string;
  as?: string;
  behaviour?: Core.TLinkBehaviour;
  onClick?: Core.TOnClick;
  pageType?: EPageType;
}

const AnchorLink: FunctionComponent<IAnchorLinkProps> = (
  {
    children,
    className,
    behaviour = 'router',
    link,
    as,
    onClick,
    pageType = EPageType.Page
  }
) => {
  let Element: JSX.Element;

  const defaultProps = {
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
        <Link href={getDynamicPage(pageType)} as={getDynamicAs(pageType, link)}>
          <a {...defaultProps}>
            {children}
          </a>
        </Link>
      );
      break;
  }

  return Element;
};

export default AnchorLink;

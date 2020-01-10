import { ETaxonomy } from '@jpp/typings/enums';
import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { getDynamicAs, getDynamicPage } from '../../../utils/index';

import styles from './Label.scss';

interface ILabelProps {
  className?: string;
  caps?: boolean;
  size?: Core.TSize;
  theme?: Core.TTheme;
  link?: string;
  as?: string;
  taxonomy?: ETaxonomy;
}

export const Label: FunctionComponent<ILabelProps> = (
  {
    children,
    link,
    theme,
    size,
    caps,
    className,
    taxonomy,
    as
  }
) => {

  const defaultProps = {
    className: classNames(
      [
        styles.label,
        styles[`label--${theme}`],
        styles[`label--${size}`],
        { [styles[`label--capitalise`]]: caps },
        className
      ]
    )
  };

  if (link) {
    const linkHref = as ? as : taxonomy ? getDynamicPage(taxonomy) : getDynamicPage(link);
    const linkAs = getDynamicAs(link);

    return (
      <Link
        href={linkHref}
        as={linkAs}
      >
        <a {...defaultProps} >
          <span className={classNames(styles.label__text)}>{children}</span>
        </a>
      </Link>
    );
  }

  return (
    <span
      {...defaultProps}
    >
      <span className={classNames(styles.label__text)}>{children}</span>
    </span>
  );
};

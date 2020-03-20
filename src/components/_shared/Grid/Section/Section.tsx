import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import styles from './Section.scss';

interface ISection {
  className?: string;
  tagElement?: Core.TTag;
  contrast?: boolean;
  theme?: Core.TTheme;
}

export const Section: FunctionComponent<ISection> = ({
  children,
  className,
  tagElement = 'article',
  contrast = false,
  theme,
  ...props
}) => {
  const Tag: any = `${tagElement}`;

  return (
    <Tag
      className={classNames(
        className,
        styles.section,
        {
          [`theme--${theme}`]: !!theme,
        },
        {
          [styles.themeTintAlpha]: !contrast && !theme,
          [styles.themeTintBeta]: contrast && !theme,
        }
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import styles from './Breadcrumbs.scss';

interface IBreadcrumbs {
  className?: string;
}

const Breadcrumbs: FunctionComponent<IBreadcrumbs> = ({ className }) => {
  return <article className={classNames(className, styles.breadcrumbs)} />;
};

export default Breadcrumbs;

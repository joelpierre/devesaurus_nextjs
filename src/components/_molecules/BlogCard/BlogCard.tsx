import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './BlogCard.scss';

interface IBlogCard {
  className?: string;
}

const BlogCard: FunctionComponent<IBlogCard> = ({ className }) => {
  return <section className={classNames(className, styles.blogCard)} />;
};

export default BlogCard;

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './Testimonial.scss';
import { Heading } from '@jpp/components/_shared/Heading/Heading';

interface ITestimonial {
  className?: string;
  name: string;
  content: string;
  company: {
    post_name: string;
    post_title: string;
  };
}

const Testimonial: FunctionComponent<ITestimonial> = (
  {
    name,
    content,
    company,
    className
  }
) => {
  return (
    <div className={classNames(className, styles.testimonial)}>
      <blockquote className={styles.testimonialQuote}>
        {content}

        <Heading
          priority={4}
          innerHTML={false}
          className={styles.testimonialHeading}
        >
          <span className={styles.testimonialHeadingName}>{name}</span>
          {company && ` - ${company.post_title}`}
        </Heading>
      </blockquote>
    </div>
  );
};

export default Testimonial;

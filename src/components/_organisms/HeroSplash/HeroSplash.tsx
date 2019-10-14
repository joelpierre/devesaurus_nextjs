import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Heading from '@jpp/components/_shared/Heading/Heading';
import Section from '@jpp/components/_shared/Grid/Section/Section';

import styles from './HeroSplash.scss';

interface IHomeHeroProps {
  className?: string;
}

const HeroSplash: FunctionComponent<Partial<IHomeHeroProps>> = (
  {
    className
  }
) => {
  return (
    <Section
      data-test="component-home-hero"
      className={classNames(styles.heroSplash, className)}
    >
      <div className={styles.heroSplashContent}>
        <Heading
          priority={1}
          className={styles.heroSplashHeading}
          innerHTML={false}
        >
          Some Heading here
        </Heading>
        <p className={styles.heroSplashCopy}>
          Some copy here
        </p>
      </div>
    </Section>
  );
};

export default HeroSplash;

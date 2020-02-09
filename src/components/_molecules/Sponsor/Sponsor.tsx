import React, { CSSProperties, FunctionComponent } from 'react';
import classNames from 'classnames';
import { Heading } from '@jpp/components/_shared/Heading/Heading';
import { LazyImage } from '@jpp/molecules/LazyImage/LazyImage';
import styles from './Sponsor.scss';

interface ISponsorProps {
  className?: string;
  sponsor: Core.ISponsor;
  style?: Partial<CSSProperties>;
}

export const Sponsor: FunctionComponent<ISponsorProps> = (
  {
    className,
    sponsor,
    style
  }
) => (
  <section className={classNames(className, styles.Sponsor)} style={style}>
    <a target="_blank" className={styles.Sponsor__link} href={sponsor.website_url}>
      <span className="sr-only">{sponsor.name} website</span>
    </a>

    <LazyImage className={styles.Sponsor__image} image={sponsor.image} />

    <Heading priority={3} className={styles.Sponsor__heading}>
      {sponsor.name}
    </Heading>
  </section>
);

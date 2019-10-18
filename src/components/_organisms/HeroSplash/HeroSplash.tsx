import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Section from '@jpp/components/_shared/Grid/Section/Section';

import withAcfComponent, { TWithAcfComponentInjectedProps } from '../../../hoc/withAcfComponent';

import styles from './HeroSplash.scss';

type THeroSplash = Core.IAcfComponentCore & TWithAcfComponentInjectedProps;

const HeroSplash: FunctionComponent<THeroSplash> = (
  {
    className,
    component,
    page_theme
  }
) => {
  const theme = component.theme ? component.theme : page_theme;

  return (
    <Section
      data-test="component-home-hero"
      className={classNames(styles.heroSplash, className, `theme--${theme}`)}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque consectetur corporis debitis doloremque ea eius,
      esse hic iusto minima modi nesciunt nobis pariatur quaerat rem unde voluptas voluptate. Distinctio!
    </Section>
  );
};

export default withAcfComponent(HeroSplash);

import React, { FunctionComponent } from 'react';
import Icon from '@jpp/atoms/Icon/Icon';
import SearchForm from '@jpp/molecules/SearchForm';
import { Container } from '@jpp/components/_shared/Grid/Container/Container';
import { Flex } from '@jpp/components/_shared/Grid/Flex/Flex';
import { Row } from '@jpp/components/_shared/Grid/Row/Row';

import { Section } from '@jpp/components/_shared/Grid/Section/Section';
import { ETaxonomy, ETheme } from '@jpp/typings/enums';
import classNames from 'classnames';

import styles from './HeroSplash.scss';
import { ScrollingMouse } from '@jpp/atoms/ScrollingMouse/ScrollingMouse';
import LabelCloud from '@jpp/molecules/LabelCloud';

export const HeroSplash: FunctionComponent<Core.IAcfComponent> = (
  {
    className,
    page_theme,
    theme
  }
) => {
  return (
    <Section
      className={
        classNames(styles.HeroSplash, className, `theme--${theme || page_theme}`)
      }
    >
      <Container fluid={true}>
        <Row>
          <Flex className="text-center mx-auto" colMd={8}>
            <Icon.Logo className={styles.HeroSplash__logo} />

            <section className={styles.HeroSplash__search}>
              <SearchForm className={styles.HeroSplash__SearchForm} />
            </section>

            <LabelCloud taxonomy={ETaxonomy.WordCategory} className={styles.HeroSplash__LabelCloud} />

            <ScrollingMouse className={styles.HeroSplash__ScrollingMouse} theme={ETheme.TintOmega} />
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

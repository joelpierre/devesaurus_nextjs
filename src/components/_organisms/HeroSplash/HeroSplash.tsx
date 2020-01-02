import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Section from '@jpp/components/_shared/Grid/Section/Section';
import Container from '@jpp/components/_shared/Grid/Container/Container';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import Icon from '@jpp/atoms/Icon/Icon';

import styles from './HeroSplash.scss';

type THeroSplash = Core.IAcfComponent;

export const HeroSplash: FunctionComponent<THeroSplash> = (
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
            <p className={styles.HeroSplash__copy}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, adipisci beatae culpa doloremque ea eius, ex
              excepturi fugit harum id in laborum maxime modi omnis porro possimus quasi sit voluptatum!
            </p>
          </Flex>

        </Row>
      </Container>
    </Section>
  );
};

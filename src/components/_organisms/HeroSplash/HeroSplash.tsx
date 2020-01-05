import Icon from '@jpp/atoms/Icon/Icon';
import { ScrollingMouse } from '@jpp/atoms/ScrollingMouse/ScrollingMouse';
import { Container } from '@jpp/components/_shared/Grid/Container/Container';
import { Flex } from '@jpp/components/_shared/Grid/Flex/Flex';
import { Row } from '@jpp/components/_shared/Grid/Row/Row';

import { Section } from '@jpp/components/_shared/Grid/Section/Section';
import { ETheme } from '@jpp/typings/enums';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

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
              We need a form here
              <br />
              <br />
              And the tag cloud below
              <br />
              <br />
              <ScrollingMouse className={styles.HeroSplash__ScrollingMouse} theme={ETheme.TintOmega} />
            </p>
          </Flex>

        </Row>
      </Container>
    </Section>
  );
};

import React from 'react';
import classNames from 'classnames';
import { Section } from '@jpp/components/_shared/Grid/Section/Section';

import styles from './Sponsors.scss';
import { Container } from '@jpp/components/_shared/Grid/Container/Container';
import { Row } from '@jpp/components/_shared/Grid/Row/Row';
import { Flex } from '@jpp/components/_shared/Grid/Flex/Flex';

export const Sponsors: React.FunctionComponent<Core.IAcfComponent> = (
  {
    className,
    theme,
    page_theme
  }
) => {
  return (
    <Section
      className={
        classNames(styles.Sponsors, className, `theme--${theme || page_theme}`)
      }
    >
      <Container>
        <Row>
          <Flex colLg={12}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, illum sequi. Accusamus ad, corporis
            doloremque,
            doloribus ex, facilis impedit incidunt magnam minus necessitatibus nemo odio officiis quis quos reiciendis
            vel!
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

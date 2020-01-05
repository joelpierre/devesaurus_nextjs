import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Section } from '@jpp/components/_shared/Grid/Section/Section';
import { Container } from '@jpp/components/_shared/Grid/Container/Container';
import { Flex } from '@jpp/components/_shared/Grid/Flex/Flex';
import { Row } from '@jpp/components/_shared/Grid/Row/Row';

import styles from './ImageBlock.scss';

type TImageBlock = Core.IAcfComponent;

export const ImageBlock: FunctionComponent<TImageBlock> = (
  {
    theme,
    page_theme,
    className
  }
) => {
  return (
    <Section
      data-test="component-"
      className={classNames([
        className,
        `theme--${theme ? theme : page_theme}`,
        styles.imageBlock
      ])}
    >
      <Container>
        <Row>
          <Flex className="flex">ImageBlock</Flex>
        </Row>
      </Container>
    </Section>
  );
};

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './ImageBlock.scss';
import Section from '@jpp/components/_shared/Grid/Section/Section';
import Container from '@jpp/components/_shared/Grid/Container/Container';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import withAcfComponent from '../../../hoc/withAcfComponent';
import { ETheme } from '@jpp/typings/enums';

type TImageBlock = Core.IAcfComponentCore;

const ImageBlock: FunctionComponent<TImageBlock> = (
  {
    component = {},
    page_theme = ETheme.TintAlpha,
    className
  }
) => {
  return (
    <Section
      data-test="component-"
      className={classNames([
        className,
        `theme--${component.theme ? component.theme : page_theme}`,
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

export default withAcfComponent(ImageBlock);

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { IAcfComponentProps } from 'src/utils/interfaces';

import Section from '../../grid/Section/Section';
import Row from '../../grid/Row/Row';
import Container from '../../grid/Container/Container';
import Flex from '../../grid/Flex/Flex';
import styles from './ImageBlock.scss';

const ImageBlock: FunctionComponent<IAcfComponentProps> = ({
  module = {},
  pageTheme = 'tint-alpha',
}) => {
  return (
    <Section
      data-test="component-"
      className={classNames([
        `theme--${module.theme ? module.theme : pageTheme}`,
        styles.imageBlock,
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

export default ImageBlock;

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { IAcfComponentProps } from 'src/utils/interfaces';

import Section from '../../grid/Section/Section';
import Row from '../../grid/Row/Row';
import Container from '../../grid/Container/Container';
import Flex from '../../grid/Flex/Flex';
import styles from '../CtaBanner/CtaBanner.module.scss';

const InlineQuote: FunctionComponent<IAcfComponentProps> = ({
  module = {},
  pageTheme = 'tint-alpha',
}) => {
  return (
    <Section
      data-test="component-inline-quote"
      className={classNames([
        `theme--${module.theme ? module.theme : pageTheme}`,
        styles['inline-quote'],
      ])}
    >
      <Container>
        <Row>
          <Flex className="flex">
            <blockquote>This is a blockquote</blockquote>
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

export default InlineQuote;

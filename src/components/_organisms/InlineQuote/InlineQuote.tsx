import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './InlineQuote.scss';
import Section from '@jpp/components/_shared/Grid/Section/Section';
import Container from '@jpp/components/_shared/Grid/Container/Container';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';

type TInlineQuote = Core.IAcfComponent;

export const InlineQuote: FunctionComponent<TInlineQuote> = (
  {
    theme,
    page_theme
  }
) => {
  return (
    <Section
      data-test="component-inline-quote"
      className={classNames([
        `theme--${theme ? theme : page_theme}`,
        styles['inline-quote']
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

import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import { Container } from '@jpp/components/_shared/Grid/Container/Container';
import { Flex } from '@jpp/components/_shared/Grid/Flex/Flex';
import { Row } from '@jpp/components/_shared/Grid/Row/Row';
import { Section } from '@jpp/components/_shared/Grid/Section/Section';

import styles from './InlineQuote.scss';

export const InlineQuote: FunctionComponent<Partial<Core.IAcfComponent>> = ({
  theme,
  page_theme,
  author,
  quote,
}) => {
  return (
    <Section
      data-test="component-inline-quote"
      className={classNames([
        `theme--${theme ? theme : page_theme}`,
        styles['inline-quote'],
      ])}
    >
      <Container>
        <Row>
          <Flex className="flex">
            <blockquote>{quote}</blockquote>
            {author && author}
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

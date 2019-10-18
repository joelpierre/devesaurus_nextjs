import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './InlineQuote.scss';
import withAcfComponent from '../../../hoc/withAcfComponent';
import Section from '@jpp/components/_shared/Grid/Section/Section';
import Container from '@jpp/components/_shared/Grid/Container/Container';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';

type TInlineQuote = Core.IAcfComponentCore;

const InlineQuote: FunctionComponent<TInlineQuote> = (
  {
    component = {},
    page_theme = Core.ETheme.TintAlpha
  }
) => {
  return (
    <Section
      data-test="component-inline-quote"
      className={classNames([
        `theme--${component.theme ? component.theme : page_theme}`,
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

export default withAcfComponent(InlineQuote);

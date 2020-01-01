import Container from '@jpp/components/_shared/Grid/Container/Container';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import Section from '@jpp/components/_shared/Grid/Section/Section';
import WYSIWYG from '@jpp/components/_shared/WYSIWYG/WYSIWYG';
import { EPosition } from '@jpp/typings/enums';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import styles from './TextBlock.scss';

type TTextBlock = Core.IAcfComponent;

export const TextBlock: FunctionComponent<TTextBlock> = (
  {
    text_content,
    theme,
    page_theme,
    fixed = false,
    position
  }
) => {
  const getContent = () => {
    return fixed ? (
      <Container fluid={false}>
        <Row>
          <Flex className={styles.textBlockContent} colLg={8}>
            <WYSIWYG dangerouslySetInnerHTML={{ __html: text_content! }} />
          </Flex>
        </Row>
      </Container>
    ) : (
      <Container>
        <Row>
          <Flex className={styles.textBlockContent}>
            <WYSIWYG dangerouslySetInnerHTML={{ __html: text_content! }} />
          </Flex>
        </Row>
      </Container>
    );
  };

  return (
    <Section
      data-test="component-text-block"
      className={classNames([
        `theme--${theme ? theme : page_theme}`,
        styles['text-block']
      ])}
    >
      {position === EPosition.Left && getContent()}
      {position === EPosition.Center && getContent()}
    </Section>
  );
};

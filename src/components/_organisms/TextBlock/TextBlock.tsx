import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import Container from '@jpp/components/_shared/Grid/Container/Container';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import Section from '@jpp/components/_shared/Grid/Section/Section';
import { WYSIWYG } from '@jpp/components/_shared/WYSIWYG/WYSIWYG';
import { EPosition } from '@jpp/typings/enums';

import styles from './TextBlock.scss';

type TTextBlock = Partial<Core.IAcfComponent>;

export const TextBlock: FunctionComponent<TTextBlock> = (
  {
    content,
    theme,
    page_theme,
    highlight,
    fixed = false,
    position
  }
) => {
  const getContent = () => {
    if (fixed) {
      return (
        <Container fluid={false}>
          <Row>
            <Flex
              className={
                classNames(
                  styles.textBlockContent,
                  { 'mx-auto': position === EPosition.Center }
                )
              }
              colLg={8}
            >
              {content && <WYSIWYG content={content} />}
            </Flex>
          </Row>
        </Container>
      );
    }

    return (
      <Container>
        <Row>
          <Flex className={styles.textBlockContent}>
            {content && <WYSIWYG content={content} />}
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
      {getContent()}
    </Section>
  );
};

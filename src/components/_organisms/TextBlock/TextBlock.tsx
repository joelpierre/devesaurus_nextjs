import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import WYSIWYG from 'src/components/shared/WYSIWYG/WYSIWYG';
import RenderChildren from 'src/utils/components/RenderChildren/RenderChildren';
import { EPosition } from 'src/utils/enums';
import { IAcfComponentProps } from 'src/utils/interfaces';

import Section from '../../grid/Section/Section';
import Row from '../../grid/Row/Row';
import Container from '../../grid/Container/Container';
import Flex from '../../grid/Flex/Flex';
import styles from './TextBlock.scss';

const TextBlock: FunctionComponent<Partial<IAcfComponentProps>> = (
  {
    module = {},
    pageTheme = 'tint-alpha',
  },
) => {
  const { text_content, theme, fixed = false, position } = module;

  const getContent = () => {
    return fixed ? (
      <Container fluid={false}>
        <Row>
          <Flex className={styles.textBlockContent} colLg={8}>
            <WYSIWYG dangerouslySetInnerHTML={{ __html: text_content }}/>
          </Flex>
        </Row>
      </Container>
    ) : (
      <Container>
        <Row>
          <Flex className={styles.textBlockContent}>
            <WYSIWYG dangerouslySetInnerHTML={{ __html: text_content }}/>
          </Flex>
        </Row>
      </Container>
    );
  };

  return (
    <Section
      data-test="component-text-block"
      className={classNames([
        `theme--${theme ? theme : pageTheme}`,
        styles['text-block'],
      ])}
    >
      <RenderChildren if={position === EPosition.LEFT}>
        {getContent()}
      </RenderChildren>

      <RenderChildren if={position === EPosition.CENTER}>
        {getContent()}
      </RenderChildren>
    </Section>
  );
};

export default TextBlock;

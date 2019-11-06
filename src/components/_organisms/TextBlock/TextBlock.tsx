import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import RenderChildren from 'src/components/_utils/RenderChildren/RenderChildren';

import styles from './TextBlock.scss';
import withAcfComponent from '../../../hoc/withAcfComponent';
import Section from '@jpp/components/_shared/Grid/Section/Section';
import WYSIWYG from '@jpp/components/_shared/WYSIWYG/WYSIWYG';
import Container from '@jpp/components/_shared/Grid/Container/Container';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import { EPosition, ETheme } from '@jpp/typings/enums';

type TTextBlock = Core.IAcfComponentCore;

const TextBlock: FunctionComponent<TTextBlock> = (
  {
    component = {},
    page_theme = ETheme.TintAlpha
  }
) => {
  const { text_content, theme, fixed = false, position } = component;

  const getContent = () => {
    return fixed ? (
      <Container fluid={false}>
        <Row>
          <Flex className={styles.textBlockContent} colLg={8}>
            <WYSIWYG dangerouslySetInnerHTML={{ __html: text_content! }}/>
          </Flex>
        </Row>
      </Container>
    ) : (
      <Container>
        <Row>
          <Flex className={styles.textBlockContent}>
            <WYSIWYG dangerouslySetInnerHTML={{ __html: text_content! }}/>
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
      <RenderChildren if={position === EPosition.Left}>
        {getContent()}
      </RenderChildren>

      <RenderChildren if={position === EPosition.Center}>
        {getContent()}
      </RenderChildren>
    </Section>
  );
};

export default withAcfComponent(TextBlock);

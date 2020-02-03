import React from 'react';
import classNames from 'classnames';
import { Container } from '@jpp/components/_shared/Grid/Container/Container';
import { Flex } from '@jpp/components/_shared/Grid/Flex/Flex';
import { Row } from '@jpp/components/_shared/Grid/Row/Row';
import { Section } from '@jpp/components/_shared/Grid/Section/Section';
import { Heading } from '@jpp/components/_shared/Heading/Heading';
import { WYSIWYG } from '@jpp/components/_shared/WYSIWYG/WYSIWYG';
import { Button } from '@jpp/molecules/Buttons/Button';
import { EPosition } from '@jpp/typings/enums';

import styles from './ContentBlock.scss';

export class ContentBlock extends React.PureComponent<Core.IAcfComponent> {
  get cta(): JSX.Element {
    const { cta_text, cta_link, cta_theme } = this.props;

    return (
      <Button className={styles.ContentBlock__button} theme={cta_theme} link={cta_link.post_name}>
        {cta_text}
      </Button>
    );
  }

  get content(): JSX.Element {
    const { position, image, heading, copy, cta } = this.props;

    if (position === EPosition.Center) {
      return (
        <Flex colLg={6} className={styles.ContentBlock__content}>
          <WYSIWYG textCenter={true} content={copy} />
          {cta && this.cta}
        </Flex>
      );
    }

    return (
      <>
        <Flex colLg={6} className={styles.ContentBlock__content}>
          {heading && (
            <Heading className={styles.ContentBlock__heading} priority={2}>
              {heading}
            </Heading>
          )}
          <WYSIWYG content={copy} />
          {cta && this.cta}
        </Flex>

        <Flex
          colLg={6}
          className={styles.ContentBlock__image}
          style={{
            backgroundImage: image && `url(${image.url})`
          }}
        />
      </>
    );
  }

  render() {
    const {
      className,
      position,
      theme,
      page_theme
    } = this.props;

    const ROOT_CLASSES = classNames(
      styles.ContentBlock,
      className,
      styles[`ContentBlock--${position}`],
      `theme--${theme ? theme : page_theme}`
    );

    return (
      <Section
        tagElement="article"
        className={ROOT_CLASSES}
      >
        <Container fluid={true}>
          <Row>
            {this.content}
          </Row>
        </Container>
      </Section>
    );
  }
}

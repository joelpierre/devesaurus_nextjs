import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Section from '@jpp/components/_shared/Grid/Section/Section';
import Container from '@jpp/components/_shared/Grid/Container/Container';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import Heading from '@jpp/components/_shared/Heading/Heading';
import Button from '@jpp/molecules/Buttons/Button';

import styles from './PressPack.scss';
import { ETheme } from '@jpp/typings/enums';

type TPressPack = Core.IAcfComponentCore;

const PressPack: FunctionComponent<TPressPack> = (
  {
    component = {},
    page_theme = ETheme.TintAlpha,
    className
  }
) => {
  const { heading, copy, brand_zip_file, image, theme } = component;
  const {
    url: { source_url: ZIP_URL }
  } = brand_zip_file;
  const {
    source_url,
    media_details: { width, height }
  } = image;

  const imageAttrs = {
    loading: 'lazy'
  };

  return (
    <Section
      data-test="component-press-pack"
      theme={theme ? theme : page_theme}
      className={classNames(styles.pressPack, className)}
    >
      <Container fluid={false}>
        <Row>
          <Flex colLg={6} className={styles.pressPackContent}>
            <Heading className={styles.pressPackHeading}>
              {heading ? heading : 'Press Pack'}
            </Heading>
            <p
              className={styles.pressPackCopy}
              dangerouslySetInnerHTML={{ __html: copy! }}
            />
            <Button
              className={styles.pressPackButton}
              theme={'brand'}
              behaviour={'anchor'}
              link={ZIP_URL}
            >
              Download our Press Pack
            </Button>
          </Flex>

          <Flex
            colLg={6}
            className={classNames(styles.pressPackImageWrapper, 'ml-auto')}
          >
            <img
              src={source_url}
              className={styles.pressPackImage}
              width={width}
              height={height}
              alt="Press pack supportive image"
              {...imageAttrs}
            />
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

export default PressPack;

import Container from '@jpp/components/_shared/Grid/Container/Container';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import Row from '@jpp/components/_shared/Grid/Row/Row';

import Section from '@jpp/components/_shared/Grid/Section/Section';
import { Heading } from '@jpp/components/_shared/Heading/Heading';
import { Button } from '@jpp/molecules/Buttons/Button';
import { ETheme } from '@jpp/typings/enums';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import styles from './PressPack.scss';

type TPressPack = Core.IAcfComponent;

export const PressPack: FunctionComponent<TPressPack> = (
  {
    className,
    heading,
    copy,
    brand_zip_file,
    image,
    theme
  }
) => {
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
      theme={theme ? theme : ETheme.Brand}
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

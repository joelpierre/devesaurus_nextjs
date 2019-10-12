import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Container from 'src/components/grid/Container/Container';
import Flex from 'src/components/grid/Flex/Flex';
import Row from 'src/components/grid/Row/Row';
import Section from 'src/components/grid/Section/Section';
import Button from 'src/components/molecules/Buttons/Button';
import Heading from 'src/components/shared/Heading/Heading';
import { IAcfModule } from 'src/utils/interfaces';
import { TTheme } from 'src/utils/types';

import styles from './PressPack.module.scss';

interface IPressPackProps {
  className: string;
  pageTheme: TTheme;
  module: Partial<IAcfModule>;
}

const PressPack: FunctionComponent<Partial<IPressPackProps>> = ({
  module = {},
  pageTheme = 'tint-alpha',
  className,
}) => {
  const { heading, copy, brand_zip_file, image, theme } = module;
  const {
    url: { source_url: ZIP_URL },
  } = brand_zip_file;
  const {
    source_url,
    media_details: { width, height },
  } = image;

  const imageAttrs = {
    loading: 'lazy'
  };

  return (
    <Section
      data-test="component-press-pack"
      theme={theme ? theme : pageTheme}
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
              dangerouslySetInnerHTML={{ __html: copy }}
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

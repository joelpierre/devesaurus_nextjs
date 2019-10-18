import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { BannerLayer } from 'react-scroll-parallax/cjs';
import withAcfComponent from '../../../hoc/withAcfComponent';

import styles from './PageHero.scss';
import Section from '@jpp/components/_shared/Grid/Section/Section';
import { ImageScroller } from '@jpp/organisms/ImageScroller/ImageScroller';
import Container from '@jpp/components/_shared/Grid/Container/Container';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import Heading from '@jpp/components/_shared/Heading/Heading';

interface IPageHeroProps {
  image?: string;
}

type TPageHero = IPageHeroProps & Core.IAcfComponentCore;

const PageHero: FunctionComponent<TPageHero> = (
  {
    component = {},
    page_theme = 'brand',
    className,
    image
  }
) => {
  let imageObj: Partial<BannerLayer> = {};

  if (image) {
    imageObj = {
      image: `${image}`
    };
  }

  const { heading, subheading, copy, theme } = component;

  return (
    <Section
      theme={theme ? theme : page_theme}
      className={classNames(styles.pageHero, className)}
    >
      <ImageScroller className={styles.pageHeroImage} image={imageObj} page_theme={page_theme}/>

      <Container fluid={false} className={styles.pageHeroContent}>
        <Row>
          <Flex colXl={8} colLg={7}>
            <Heading className={styles.pageHeroHeading} priority={1}>
              {heading}
            </Heading>
          </Flex>
        </Row>
        <Row>
          <Flex colXl={8} colLg={7}>
            {(copy || subheading) && (
              <p className={styles.pageHeroCopy}>
                {copy ? copy : subheading}
              </p>
            )}
          </Flex>
        </Row>
      </Container>

      {/*{location && (*/}
      {/*  <Container fluid={false} className={styles.pageHeroSocialWrapper}>*/}
      {/*    <SocialShareMenu*/}
      {/*      className={styles.pageHeroSocial}*/}
      {/*      location={location}*/}
      {/*    />*/}
      {/*  </Container>*/}
      {/*)}*/}
    </Section>
  );
};

export default withAcfComponent(PageHero);

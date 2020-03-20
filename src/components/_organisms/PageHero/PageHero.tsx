import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { BannerLayer } from 'react-scroll-parallax/cjs';

import { Container } from '@jpp/components/_shared/Grid/Container/Container';
import { Flex } from '@jpp/components/_shared/Grid/Flex/Flex';
import { Row } from '@jpp/components/_shared/Grid/Row/Row';
import { Section } from '@jpp/components/_shared/Grid/Section/Section';
import { Heading } from '@jpp/components/_shared/Heading/Heading';
import { ImageScroller } from '@jpp/organisms/ImageScroller/ImageScroller';
import { ETheme } from '@jpp/typings/enums';

import styles from './PageHero.scss';

interface IPageHeroProps {
  image?: string;
}

type TPageHero = IPageHeroProps & Partial<Core.IAcfComponent>;

export const PageHero: FunctionComponent<TPageHero> = ({
  heading,
  subheading,
  copy,
  theme: _theme,
  className,
  image,
}) => {
  let imageObj: Partial<BannerLayer> = {};
  const theme = _theme ? _theme : ETheme.Brand;

  if (image) {
    imageObj = {
      image: `${image}`,
    };
  }

  return (
    <Section theme={theme} className={classNames(styles.pageHero, className)}>
      <ImageScroller
        className={styles.pageHeroImage}
        image={imageObj}
        page_theme={theme}
      />

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
              <p className={styles.pageHeroCopy}>{copy ? copy : subheading}</p>
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

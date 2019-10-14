import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { BannerLayer } from 'react-scroll-parallax/cjs';
import Container from 'src/components/grid/Container/Container';
import Flex from 'src/components/grid/Flex/Flex';
import Row from 'src/components/grid/Row/Row';
import Section from 'src/components/grid/Section/Section';
import SocialShareMenu from 'src/components/molecules/SocialShareMenu/SocialShareMenu';
import ImageScroller from 'src/components/organisms/ImageScroller/ImageScroller';
import Heading from 'src/components/shared/Heading/Heading';
import { IAcfModule } from 'src/utils/interfaces';
import { TTheme } from 'src/utils/types';

import styles from './PageHero.scss';

interface IPageHeroProps {
  module: Partial<IAcfModule>;
  pageTheme: TTheme;
  className: string;
  location: Location;
  image: string;
  pageContext?: any;
}

const PageHero: FunctionComponent<Partial<IPageHeroProps>> = ({
  module = {},
  pageTheme = 'brand',
  className,
  image,
  pageContext = {},
  location,
}) => {
  const imageObj: Partial<BannerLayer> = {
    image: image
      ? image
      : pageContext.featured_media
      ? pageContext.featured_media.source_url
      : `${process.env.GATSBY_PROTOCOL}://${process.env.GATSBY_API_URL}/wp-content/uploads/2019/08/samuel-zeller-j0g8taxHZa0-unsplash.jpg`,
  };

  const { heading, copy, theme } = module;
  const { acf = {} } = pageContext;

  return (
    <Section
      theme={theme ? theme : pageTheme}
      className={classNames(styles.pageHero, className)}
    >
      <ImageScroller className={styles.pageHeroImage} image={imageObj} />

      <Container fluid={false} className={styles.pageHeroContent}>
        <Row>
          <Flex colXl={8} colLg={7}>
            <Heading className={styles.pageHeroHeading} priority={1}>
              {heading ? heading : pageContext.title}
            </Heading>

            <div className="w-100" />

            {(copy || acf.subtitle) && (
              <p className={styles.pageHeroCopy}>
                {copy ? copy : pageContext.acf.subtitle}
              </p>
            )}
          </Flex>
        </Row>
      </Container>

      {location && (
        <Container fluid={false} className={styles.pageHeroSocialWrapper}>
          <SocialShareMenu
            className={styles.pageHeroSocial}
            location={location}
          />
        </Container>
      )}
    </Section>
  );
};

export default PageHero;

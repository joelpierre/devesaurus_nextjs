import { StaticQuery, graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Container from 'src/components/grid/Container/Container';
import Flex from 'src/components/grid/Flex/Flex';
import Row from 'src/components/grid/Row/Row';
import Section from 'src/components/grid/Section/Section';
import Carousel from 'src/components/molecules/Carousel/Carousel';
import Testimonial from 'src/components/molecules/Testimonial/Testimonial';
import Heading from 'src/components/shared/Heading/Heading';
import { IAcfModule } from 'src/utils/interfaces';
import { TTheme } from 'src/utils/types';

import styles from './Testimonials.scss';
import './utils/slick-overrides.scss';

interface IPureTestimonialsProps extends ITestimonialsProps {
  allWordpressAcfOptions: any;
}

interface ITestimonialsProps {
  className?: string;
  pageTheme?: TTheme;
  module?: Partial<IAcfModule>;
}

export const PureTestimonials: FunctionComponent<IPureTestimonialsProps> = ({
  className,
  pageTheme = 'tint-alpha',
  allWordpressAcfOptions,
  module = {},
}) => {
  const { testimonials = [] } = allWordpressAcfOptions.edges[0].node.options;
  const { theme } = module;

  const settings = {
    dots: true,
    arrows: false,
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section
      theme={theme ? theme : pageTheme}
      data-test="component-testimonials"
      className={classNames(styles.testimonials, className)}
    >
      <Container>
        <Row className="justify-content-center">
          <Flex
            colLg={6}
            colMd={5}
            className={classNames(
              'display-flex align-items-center theme--tint-alpha',
              styles.testimonialsHeadingWrapper
            )}
          >
            <Heading
              priority={2}
              className={classNames(styles.testimonialsHeading)}
            >
              What some of our clients have to say...
            </Heading>
          </Flex>

          <Flex
            colLg={6}
            colMd={7}
            className={classNames('mx-auto', styles.testimonialsWrapper)}
          >
            <Carousel
              theme={module.theme}
              className={classNames(
                styles.testimonialsContainer,
                'testimonials-slider'
              )}
              settings={settings}
            >
              {testimonials &&
                testimonials.map((testimonial: any, index: number) => {
                  return <Testimonial key={index} {...testimonial} />;
                })}
            </Carousel>
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

const Testimonials: FunctionComponent<ITestimonialsProps> = ({ ...props }) => (
  <StaticQuery
    data-test="component-testimonials-query"
    query={query}
    render={queryProps => <PureTestimonials {...queryProps} {...props} />}
  />
);

const query = graphql`
  {
    allWordpressAcfOptions {
      edges {
        node {
          options {
            testimonials {
              name
              content
              company {
                wordpress_id
                post_name
                post_title
              }
            }
          }
        }
      }
    }
  }
`;

export default Testimonials;

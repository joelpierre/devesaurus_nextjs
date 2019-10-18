import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Section from '@jpp/components/_shared/Grid/Section/Section';
import Container from '@jpp/components/_shared/Grid/Container/Container';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import Heading from '@jpp/components/_shared/Heading/Heading';
import Carousel from '@jpp/molecules/Carousel/Carousel';
import Testimonial from '@jpp/molecules/Testimonial/Testimonial';

import './utils/slick-overrides.scss';
import styles from './Testimonials.scss';

interface ITestimonials {
  testimonials: Core.ITestimonials[];
}

type TTestimonialsProps = ITestimonials & Core.IAcfComponentCore;

export const Testimonials: FunctionComponent<TTestimonialsProps> = (
  {
    className,
    page_theme = Core.ETheme.TintAlpha,
    component = {},
    testimonials
  }
) => {
  const { theme } = component;

  const settings = {
    dots: true,
    arrows: false,
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Section
      theme={theme ? theme : page_theme}
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
              theme={component.theme}
              className={classNames(
                styles.testimonialsContainer,
                'testimonials-slider'
              )}
              settings={settings}
            >
              {testimonials && testimonials.map((testimonial: any, index: number) => {
                return <Testimonial key={index} {...testimonial} />;
              })}
            </Carousel>
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

export default Testimonials;

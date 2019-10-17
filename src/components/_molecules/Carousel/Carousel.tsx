import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Slider from 'react-slick';

import styles from './Carousel.scss';
import './utils/Slick.scss';
import './utils/SlickTheme.scss';

interface ICarouselProps {
  className: string;
  settings: any;
  theme: Core.TTheme;
}

const Carousel: FunctionComponent<Partial<ICarouselProps>> = (
  {
    className,
    settings,
    children
  }
) => {
  return (
    <div className={classNames(className, styles.carousel)}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;

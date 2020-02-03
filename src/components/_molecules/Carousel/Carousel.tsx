import React, { FunctionComponent } from 'react';
import Slider, { Settings } from 'react-slick';
import './utils/Slick.scss';
import './utils/SlickTheme.scss';
import classNames from 'classnames';

import styles from './Carousel.scss';

interface ICarouselProps {
  className: string;
  settings?: Settings;
  theme: Core.TTheme;
}

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Carousel: FunctionComponent<Partial<ICarouselProps>> = (
  {
    className,
    settings = defaultSettings,
    children
  }
) => {

  return (
    <div className={classNames(className, styles.Carousel)}>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;

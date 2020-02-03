import React from 'react';
import { CustomArrowProps } from 'react-slick';
import classNames from 'classnames';
import Icons from '@jpp/atoms/Icon/Icon';
import styles from '../Carousel.scss';

export const CarouselNextArrow: React.FunctionComponent<CustomArrowProps> = (
  { className, onClick }
) => (
  <button
    className={classNames(className, styles.Carousel__arrow, styles['Carousel__arrow-next'])}
    onClick={onClick}
  >
    <Icons.ChevronRight inline={true} />
  </button>
);

export const CarouselPrevArrow: React.FunctionComponent<CustomArrowProps> = (
  { className, onClick }
) => (
  <button
    className={classNames(className, styles.Carousel__arrow, styles['Carousel__arrow-prev'])}
    onClick={onClick}
  >
    <Icons.ChevronLeft inline={true} />
  </button>
);

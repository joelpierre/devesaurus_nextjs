import React, { PureComponent } from 'react';
import classNames from 'classnames';
import {
  BannerLayer,
  ParallaxBanner,
} from 'react-scroll-parallax/cjs';
import Heading from 'src/components/shared/Heading/Heading';
import { IAcfModule } from 'src/utils/interfaces';
import { TSize } from 'src/utils/types';

import styles from './ImageScroller.module.scss';

interface IImageScrollerProps {
  module?: Partial<IAcfModule>;
  size?: TSize;
  image?: Partial<BannerLayer>;
  className: string;
}

export class ImageScroller extends PureComponent<Partial<IImageScrollerProps>> {
  static defaultProps = {
    size: 'md',
    module: {},
  };

  render() {
    const { className, image, children, size, module } = this.props;
    const { heading, copy } = module;

    return (
      <ParallaxBanner
        className={classNames(className, styles.imageScroller, {
          [styles.imageScrollerXs]: size === 'xs',
          [styles.imageScrollerSm]: size === 'sm',
          [styles.imageScrollerMd]: size === 'md',
          [styles.imageScrollerLg]: size === 'lg',
          [styles.imageScrollerXl]: size === 'xl',
        })}
        layers={
          [{
            amount: 0.3,
            children: undefined,
            ...image,
          }]
        }
      >
        <div className={styles.imageScrollerContent}>
          {children ? children : (
            ((heading || copy) ? (
              <>
                heading && (
                <Heading>
                  {heading}
                </Heading>
                )
                copy && (
                <p>
                  {copy}
                </p>
                )
              </>
            ) : null)
          )}
        </div>
      </ParallaxBanner>
    );
  }
}

export default ImageScroller;

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import {
  BannerLayer,
  ParallaxBanner
} from 'react-scroll-parallax/cjs';

import styles from './ImageScroller.scss';
import Heading from '@jpp/components/_shared/Heading/Heading';
import withAcfComponent from '../../../hoc/withAcfComponent';

interface IImageScrollerProps {
  size?: Core.TSize;
  image?: Partial<BannerLayer>;
}

type TImageScroller = Partial<IImageScrollerProps> & Core.IAcfComponentCore;

export class ImageScroller extends PureComponent<TImageScroller> {
  static defaultProps = {
    size: Core.ESize.Md,
    component: {}
  };

  render() {
    const { className, image, children, size, component } = this.props;
    const { heading, copy } = component;

    return (
      <ParallaxBanner
        className={classNames(className, styles.imageScroller, {
          [styles.imageScrollerXs]: size === 'xs',
          [styles.imageScrollerSm]: size === 'sm',
          [styles.imageScrollerMd]: size === 'md',
          [styles.imageScrollerLg]: size === 'lg',
          [styles.imageScrollerXl]: size === 'xl'
        })}
        layers={
          [{
            amount: 0.3,
            children: undefined,
            ...image
          }]
        }
      >
        <div className={styles.imageScrollerContent}>
          {children ? children : (
            ((heading || copy) ? (
              <>
                heading && (
                <Heading
                  className={styles.imageScrollerHeading}
                >
                  {heading}
                </Heading>
                )
                copy && (
                <p
                  className={styles.imageScrollerCopy}
                >
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

export default withAcfComponent(ImageScroller);

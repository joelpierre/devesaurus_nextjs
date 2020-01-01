import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax/cjs';

import Heading from '@jpp/components/_shared/Heading/Heading';
import { ESize } from '@jpp/typings/enums';

import styles from './ImageScroller.scss';

interface IImageScrollerProps {
  size?: Core.TSize;
  image?: Partial<BannerLayer>;
}

type TImageScroller = IImageScrollerProps & Partial<Core.IAcfComponent>;

export const ImageScroller: FunctionComponent<TImageScroller> = (
  {
    className,
    image,
    theme,
    page_theme,
    children,
    size = ESize.Md,
    heading,
    copy
  }
) => {
  const getContent = (): JSX.Element | null => {
    if (children) {
      return <>{children}</>;
    }

    if (heading || copy) {
      return (
        <>
          heading && (
          <Heading className={styles.imageScrollerHeading}>
            {heading}
          </Heading>
          )
          copy && (
          <p className={styles.imageScrollerCopy}>
            {copy}
          </p>
          )
        </>
      );
    }

    return null;
  };

  return (
    <ParallaxBanner
      className={classNames(className, styles.imageScroller, {
        [styles.imageScrollerXs]: size === ESize.Xs,
        [styles.imageScrollerSm]: size === ESize.Sm,
        [styles.imageScrollerMd]: size === ESize.Md,
        [styles.imageScrollerLg]: size === ESize.Lg,
        [styles.imageScrollerXl]: size === ESize.Xl
      })}
      layers={
        [{
          amount: 0.3,
          children: undefined,
          ...image
        }]
      }
    >
      <article className={styles.imageScrollerContent}>
        {getContent()}
      </article>
    </ParallaxBanner>
  );
};

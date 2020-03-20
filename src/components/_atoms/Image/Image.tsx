import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import { TFuncVoid } from '@jpp/typings/index';

import styles from './Image.scss';

interface IImageProps {
  className?: string;
  image: Core.IMedia;
  onLoad?: TFuncVoid;
  onError?: TFuncVoid;
}

const Image: FunctionComponent<IImageProps> = (
  { className, image, onLoad, onError },
  ref: React.RefObject<HTMLImageElement>
) => {
  const imageAttributes = {
    ref,
    src: image.url,
    className: classNames(styles.Image, className),
    height: image.height,
    width: image.width,
    loading: 'lazy' as any,
  };

  return (
    <img
      {...imageAttributes}
      alt={image.alt || image.name}
      onError={onError}
      onLoad={onLoad}
    />
  );
};

Image.displayName = 'Image';
// @ts-ignore
const RefImage = React.forwardRef(Image);
RefImage.displayName = 'RefImage';

export default RefImage;

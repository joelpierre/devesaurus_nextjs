import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './Image.scss';
import { TFuncVoid } from '@jpp/typings/index';

interface IImageProps {
  className?: string;
  image: Core.IMedia;
  onLoad?: TFuncVoid;
  onError?: TFuncVoid;
}

const Image: FunctionComponent<IImageProps> = (
  props,
  ref: React.RefObject<HTMLImageElement>
) => {
  const { className, image, onLoad, onError } = props;

  const imageAttributes = {
    src: image.url,
    className: classNames(styles.Image, className),
    ref,
    height: image.height,
    width: image.width,
    loading: 'lazy'
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
const RefImage = React.forwardRef(Image);
RefImage.displayName = 'RefImage';

export default RefImage;

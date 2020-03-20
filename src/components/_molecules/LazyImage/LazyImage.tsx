import classNames from 'classnames';
import React from 'react';

import Image from '@jpp/atoms/Image/Image';
import {
  isElementNearViewport,
  loadImageWithCanvas,
  loadImageWithXhr,
} from '@jpp/molecules/LazyImage/utils';
import { TFuncVoid } from '@jpp/typings/index';

import styles from './LazyImage.scss';

export enum ELazyImageMode {
  Immediate = 'Immediate',
  Deferred = 'Deferred',
}

export enum ELazyImageLoadMode {
  Direct = 'direct',
  Xhr = 'xhr',
  Canvas = 'canvas',
}

export enum ELazyImageEffect {
  None = 'None',
  Fade = 'Fade',
  ZoomOut = 'ZoomOut',
}

interface ILazyImageProps {
  image: Core.IMedia;
  ratio?: number;
  className?: string;
  ref?: React.RefObject<HTMLImageElement>;
  onLoad?: TFuncVoid;
  onError?: TFuncVoid;
  mode?: ELazyImageMode;
  backgroundColor?: string;
  effect?: ELazyImageEffect;
  options?: any;
}

interface ILazyImageState {
  isLoaded: boolean;
}

export class LazyImage extends React.Component<
  ILazyImageProps,
  ILazyImageState
> {
  static defaultProps: Pick<ILazyImageProps, 'mode' | 'effect' | 'ratio'> = {
    mode: ELazyImageMode.Immediate,
    effect: ELazyImageEffect.None,
  };

  imageRef = React.createRef<HTMLImageElement>();
  containerRef = React.createRef<HTMLDivElement>();
  isLoading: boolean = false;
  isSet: boolean = false;
  isInitialRun: boolean = true;
  scrollCheckFrequencyMs = 150; // lower is more sensitive.
  scrollCheckTimeout?: any;
  landscapeExpansionQuotient = 0.5;
  portraitExpansionQuotient = 1;

  state: ILazyImageState = {
    isLoaded: false,
  };

  constructor(props: ILazyImageProps) {
    super(props);
    if (!this.shouldDeferLoading()) {
      this.state.isLoaded = true;
    }
  }

  componentDidMount() {
    if (this.shouldDeferLoading()) {
      window.addEventListener('scroll', this.checkScrollPosition);
      window.addEventListener('resize', this.checkScrollPosition);
      this.checkScrollPosition();
    }
  }

  shouldDeferLoading = () => {
    return this.props.mode === ELazyImageMode.Deferred;
  };

  checkScrollPosition = () => {
    clearTimeout(this.scrollCheckTimeout);

    const elRef = this.imageRef;

    this.scrollCheckTimeout = setTimeout(
      () => {
        if (elRef === null || elRef.current === null) {
          return;
        }
        if (
          isElementNearViewport(
            elRef.current,
            this.portraitExpansionQuotient,
            this.landscapeExpansionQuotient
          )
        ) {
          if (!this.isLoading) {
            this.loadImage();
          }
        }
      },
      this.isInitialRun ? 0 : this.scrollCheckFrequencyMs
    );
    this.isInitialRun = false;
  };

  loadImage = () => {
    const imageSrc = this.props.image.url;

    let loadMode: ELazyImageLoadMode = ELazyImageLoadMode.Direct;
    let imageLoader = (src: string) => new Promise(resolve => resolve(src));

    if (this.shouldDeferLoading()) {
      if (this.containerRef.current === null) {
        return;
      }
      const style = window.getComputedStyle(this.containerRef.current);
      if (style.display === 'none') {
        return;
      }

      if (typeof window.URL !== 'undefined') {
        imageLoader = loadImageWithXhr;
        loadMode = ELazyImageLoadMode.Xhr;
      } else if (typeof window.canvas !== 'undefined') {
        imageLoader = loadImageWithCanvas;
        loadMode = ELazyImageLoadMode.Canvas;
      }
    }

    this.isLoading = true;

    console.warn(loadMode);

    imageLoader(imageSrc)
      .then(this.setImage)
      .catch(error => {
        console.log(error);
        this.setImage(imageSrc);
      });
  };

  setImage = (dataUri: string): void | undefined => {
    if (this.isSet) {
      return;
    }

    this.isSet = true;

    const elRef = this.imageRef;

    if (elRef !== null && elRef.current !== null) {
      elRef.current.setAttribute('src', dataUri);
    }

    // Sometimes, if the image loads quickly, we could set and update
    // the CSS by the time the image is in place. This means we lose
    // the transition effects.
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 50);
  };

  componentWillUnmount() {
    if (this.shouldDeferLoading()) {
      window.removeEventListener('scroll', this.checkScrollPosition);
      window.removeEventListener('resize', this.checkScrollPosition);
    }
  }

  renderAsImage() {
    const { image } = this.props;
    image.url = this.shouldDeferLoading() ? '' : image && image.url;

    return (
      <Image
        {...this.props}
        image={image}
        ref={this.imageRef}
        className={classNames(
          styles.LazyImage__image,
          styles[`LazyImage__image--with${this.props.effect}`],
          {
            [styles['LazyImage__image--loaded']]: this.state.isLoaded,
            [styles['LazyImage__image--loading']]: !this.state.isLoaded,
          }
        )}
      />
    );
  }

  render() {
    const containerStyle = {
      paddingTop: `${(this.props.ratio ? this.props.ratio : 0.5) * 100}%`,
      backgroundColor:
        this.props.backgroundColor !== undefined
          ? this.props.backgroundColor
          : 'transparent',
    };

    return (
      <div
        className={classNames(styles.LazyImage, this.props.className)}
        style={containerStyle}
        ref={this.containerRef}
      >
        {this.renderAsImage()}
      </div>
    );
  }
}

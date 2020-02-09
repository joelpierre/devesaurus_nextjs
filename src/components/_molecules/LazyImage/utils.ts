export interface IRectangle {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export const isAllInViewport = (rect: IRectangle, viewportHeight: number, viewportWidth: number) => {
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= viewportHeight &&
    rect.right <= viewportWidth
  );
};

export const isAnyInViewport = (rect: IRectangle, viewportHeight: number, viewportWidth: number) => {
  return (
    (rect.top >= 0 && rect.top <= viewportHeight ||
      rect.bottom >= 0 && rect.bottom <= viewportHeight) &&
    (rect.left >= 0 && rect.left <= viewportWidth ||
      rect.right >= 0 && rect.right <= viewportWidth)
  );
};

export const isElementInViewport = (element?: HTMLElement): boolean => {
  if (element === undefined
    || window === undefined
    || document === undefined
    || document.documentElement === null) {
    return false;
  }

  const rect = element.getBoundingClientRect();

  return isAllInViewport(
    rect,
    (window.innerHeight || document.documentElement.clientHeight),
    (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const isElementNearViewport = (
  element: HTMLElement,
  portraitExpansionQuotient: number = 1,
  landscapeExpansionQuotient: number = 1): boolean => {

  if (element === undefined
    || window === undefined
    || document === undefined
    || document.documentElement === null) {
    return false;
  }

  const rect = element.getBoundingClientRect();

  let screenHeight = window.innerHeight || document.documentElement.clientHeight;
  let screenWidth = window.innerWidth || document.documentElement.clientWidth;

  const aspectRatio = screenWidth / screenHeight;

  const expansionQuotient = aspectRatio < 1
    ? portraitExpansionQuotient
    : landscapeExpansionQuotient;

  screenHeight += screenHeight * expansionQuotient;
  screenWidth += screenWidth * expansionQuotient;

  return isAnyInViewport(
    rect,
    screenHeight,
    screenWidth
  );
};

export const loadImageWithCanvas = (imageUrl: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {

    return loadImage(imageUrl).then(onLoadImage);

    // tslint:disable-next-line:only-arrow-functions
    function onLoadImage(image: HTMLImageElement) {
      const canvas = createImageCanvas(image);

      const context = canvas.getContext('2d');

      if (context !== null) {
        context.drawImage(image, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        resolve(dataUrl);
      } else {
        reject('Unable to get 2d canvas.');
      }
    }
  });
};

export const loadImageWithXhr = (imageUrl: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    try {
      const xhr = new XMLHttpRequest();
      const blobHandler = () => {
        const url = window.URL.createObjectURL(xhr.response);
        resolve(url);
      };

      const svgHandler = () => {
        const svgData = encodeURIComponent(xhr.response);
        const url = `"data:image/svg+xml; charset=utf8, ${svgData}"`;
        resolve(url);
      };

      if (imageUrl.endsWith('.svg')) {
        xhr.onload = svgHandler;
      } else {
        xhr.onload = blobHandler;
        xhr.responseType = 'blob';
      }

      xhr.open('GET', imageUrl, true);
      xhr.send();

    } catch (error) {
      reject(error);
    }
  });
};

export const isFullBleed = (image: Core.IMedia) => {
  const getImageProp = (key: keyof Core.IMedia, defaultValue: number): number => {
    return image && image[key] as number || defaultValue;
  };

  const width = getImageProp('width', 0);
  const height = getImageProp('height', 0);
  const diff = Math.abs(width - height);

  // DIFF_TOLERANCE is an arbitrary about the diff is allowed to vary by.
  const DIFF_TOLERANCE = 5;
  return diff >= DIFF_TOLERANCE && width > 1000;
};

export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    try {
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.src = src;
      image.onload = () => resolve(image);
      image.onerror = reject;
    } catch (error) {
      reject(error);
    }
  });
};

export const createImageCanvas = (image: HTMLImageElement): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  const { naturalWidth, naturalHeight } = image;
  canvas.width = naturalWidth;
  canvas.height = naturalHeight;
  return canvas;
};

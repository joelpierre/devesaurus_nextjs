/**
 * Update any object passed through
 * @param oldObject
 * @param updatedValues
 * @returns updatedObject
 */
export const updateObject = <T>(oldObject: T, updatedValues: T): T => ({
  ...oldObject,
  ...updatedValues
});

/**
 * Map over ACF Component array and amend the layout title
 * @returns {*}
 * @param component
 */
export const mapOverACFComponents = (component: Partial<any>) => {
  component.__typename = component.__typename.replace('WordPressAcf_', '');

  return component;
};

/**
 * Slugify a string in order
 * @param text
 * @returns {string}
 */
export const slugify = (text: string | undefined): string | undefined => {
  // @ts-ignore
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

/**
 * Sanitize encoded characters in string
 * @param text
 */
export const removeEncodedChar = (text: string): string | undefined => {
  if (text) {
    return text.replace(/&#(?:x([\da-f]+)|(\d+));/gi, '-');
  }

  return;
};

/**
 * Sanitize route pathname
 * @param text
 */
export const sanitizePathName = (text: string): string | undefined => {
  if (text) {
    return text.replace(/\//g, '-');
  }
  return;
};

/**
 * Format UK number
 * @param numberToFormat
 */
export const formatNumber = (numberToFormat: string): string =>
  numberToFormat.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1 $2 $3');

/**
 * Sanitize encoded characters in string
 * @param text
 */
export const sanitizeEncodedChar = (text: string): string | undefined => {
  if (text) {
    return text.replace(
      /&#(?:x([\da-f]+)|(\d+));/gi,
      (_, hex: string, dec: number): string =>
        String.fromCharCode(dec || +('0x' + hex))
    );
  }
  return;
};

export const mapSlugToTheme = (slug: string): any => {
  let theme: any;

  switch (slug) {
    case 'logo-design':
    default:
      theme = 'brand';
      break;
    case 'web-design':
    case 'graphic-design':
      theme = 'alpha';
      break;
    case 'consultancy':
      theme = 'beta';
      break;
    case 'hosting':
      theme = 'gamma';
      break;
    case 'seo':
      theme = 'psi';
      break;
    case 'web-development':
      theme = 'omega';
      break;
  }

  return theme;
};

/**
 * Find out what the breakpoint is for responsive javascript functions
 * @type {{is(*): (*|undefined)}}
 */
/* istanbul ignore next */
export const breakpoint = {
  /* istanbul ignore next */
  is(s: string) {
    const size: string = s.trim();
    const sizes: { [s: string]: string } = {
      xsmall: '599px',
      small: '600px',
      medium: '900px',
      large: '1200px',
      xlarge: '1800px'
    };

    // console.log(window.matchMedia);

    // Eslint doesn't like you accessing hasOwnProperty directly on object.
    // https://eslint.org/docs/rules/no-prototype-builtins
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(sizes, size)) {
      return window.matchMedia(`only screen and (min-width: ${sizes[size]})`)
        .matches;
    }

    throw new ReferenceError(
      `The size ${size} is not a valid breakpoint: ${JSON.stringify(sizes)}`
    );
  }
};

/**
 * Clean urls that are internal
 * @param link
 * @returns {string}
 */
export const sanitizeUrl = (link: string): string => {
  if (link) {
    return (
      link
        .toLowerCase()
        .replace(/(^\w+:|^)\/\//, '')
        // .replace('/', '')
        // .replace(/\//g, '')
        // .replace('http', '')
        // .replace('https', '')
        // .replace(':', '')
        .replace(process.env.API_URL || 'devesaurus.test', '')
    );
  }

  return link;
};

export const isNonEmptyString = value =>
  typeof value === 'string'
  && value.trim() !== '';

export const mapPageIdToPage = (id: number): string => {
  switch (id) {
    case 330:
    default:
      return 'services';
  }
};

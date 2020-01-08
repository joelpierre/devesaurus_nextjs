import { IconName } from '@fortawesome/fontawesome-common-types';
import { ETaxonomy } from '@jpp/typings/enums';

/**
 * Update any Object passed through
 */
export const updateObject = <T>(oldObject: T, updatedValues: Partial<T>): T => {
  if (Object.keys(updatedValues).length > 0) {
    return {
      ...oldObject,
      ...updatedValues
    };
  }
  return {} as T;
};

/**
 * Has object got keys
 */
export const objectHasKeys = <T>(object: T): boolean => {
  return Object.keys(object).length === 0;
};

/**
 * Has array got length
 */
export const arrayHasLength = <T>(array: T): boolean => {
  return Array.isArray(array) && array.length > 0;
};

/**
 * Update any Array passed through
 */
export const updateArray = <T>(oldArray: T[], updatedValues: T[]): T[] => {
  if (Array.isArray(updatedValues)) {
    return [
      ...oldArray,
      ...updatedValues
    ];
  }
  return [] as T[];
};

/**
 * Slugify a string in order
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

/**
 * Map taxonomy slugs to theme colours
 * @param slug
 * @returns {string}
 */
export const mapTaxonomyTheme = (slug: string = 'default'): Core.TTheme => {
  let theme: Core.TTheme;

  switch (slug) {
    case 'development':
    case 'backend-development':
    case 'frontend-development':
    case 'seo':
    case 'social':
    case 'web-development':
      theme = 'alpha';
      break;

    case 'web':
    case 'graphic-design':
    case 'design':
    case 'ui-design':
    case 'ux-design':
    case 'bash':
    case 'shell':
    case 'zsh':
      theme = 'beta';
      break;

    case 'css':
    case 'css3':
    case 'advertisement':
    case 'analytics':
    case 'hosting':
    case 'vps':
    case 'virtual-private-server':
    case 'git':
      theme = 'gamma';
      break;

    case 'html':
    case 'html5':
    case 'markup':
    case 'nodejs':
    case 'aws':
    case 'gcp':
    case 'php':
    case 'dev-ops':
    case 'python':
      theme = 'psi';
      break;

    case 'news':
    case 'js':
    case 'es6':
    case 'client-side':
    case 'server-side':
    case 'cms':
    case 'content-management-system':
    case 'systems-architecture':
      theme = 'omega';
      break;

    default:
      theme = 'brand';
  }

  return theme;
};

/**
 * Map taxonomy slug to fontAwesome icon
 * @param slug
 * @returns {array}
 */
export const mapTaxonomyIcon = (slug: string = 'default'): IconName => {
  let icon;

  switch (slug) {
    case 'news':
      icon = ['far', 'newspaper'];
      break;
    case 'cms':
    case 'content-management-system':
    case 'systems-architecture':
      icon = ['far', 'sitemap'];
      break;
    case 'nodejs':
      icon = ['fab', 'node-js'];
      break;
    case 'aws':
      icon = ['fab', 'aws'];
      break;
    case 'client-side':
    case 'browser':
      icon = ['far', 'browser'];
      break;
    case 'gcp':
      icon = ['fab', 'google'];
      break;
    case 'php':
      icon = ['far', 'php'];
      break;
    case 'server-side':
    case 'dev-ops':
    case 'hosting':
    case 'vps':
    case 'virtual-private-server':
      icon = ['far', 'server'];
      break;
    case 'python':
      icon = ['far', 'python'];
      break;
    case 'advertisement':
      icon = ['far', 'ad'];
      break;
    case 'analytics':
      icon = ['far', 'analytics'];
      break;
    case 'icons':
      icon = ['far', 'icons'];
      break;
    case 'web':
      icon = ['far', 'globe'];
      break;
    case 'seo':
    case 'search-engine-optimisation':
      icon = ['fas', 'search'];
      break;
    case 'social':
      icon = ['far', 'users'];
      break;
    case 'development':
    case 'frontend-development':
      icon = ['far', 'brackets-curly'];
      break;
    case 'backend-development':
    case 'web-development':
    case 'markup':
      icon = ['far', 'code'];
      break;
    case 'ui-design':
      icon = ['far', 'object-group'];
      break;
    case 'graphic-design':
      icon = ['far', 'palette'];
      break;
    case 'ux':
    case 'ux-design':
    case 'user-experience':
      icon = ['far', 'tint'];
      break;
    case 'design':
      icon = ['far', 'paint-brush'];
      break;
    case 'css':
    case 'css3':
      icon = ['fab', 'css3'];
      break;
    case 'html':
    case 'html5':
      icon = ['fab', 'html5'];
      break;
    case 'js':
    case 'es6':
    case 'javascript':
      icon = ['fab', 'js'];
      break;
    case 'bash':
    case 'terminal':
    case 'shell':
    case 'zsh':
      icon = ['far', 'terminal'];
      break;
    case 'bitbucket':
      icon = ['fab', 'bitbucket'];
      break;
    case 'gitlab':
      icon = ['fab', 'gitlab'];
      break;
    case 'github':
      icon = ['fab', 'github'];
      break;
    case 'git':
      icon = ['fab', 'git'];
      break;
    case 'git-commands':
      icon = ['far', 'code-commit'];
      icon = ['far', 'code-branch'];
      break;
    default:
      icon = ['far', 'atom-alt'];
  }

  return icon;
};

export const getDynamicPage = (slug: string | undefined): string => {
  switch (slug) {
    case 'categories':
    case 'tags':
      return `devinitions/${slug}`;
    case 'devinitions':
    case 'devegram':
      return `/${slug}`;
    case 'home':
      return '/';
    default:
      return '[slug]';
  }
};

export const getDynamicAs = (slug: string | undefined): string | undefined => {
  switch (slug) {
    case 'categories':
    case 'tags':
      return undefined;
    case 'home':
      return '/';
    default:
      return `/${slug}`;
  }
};

export const getTaxonomySlug = (slug: ETaxonomy): string => {
  switch (slug) {
    case ETaxonomy.Category:
      return 'category';
    case ETaxonomy.PostTag:
      return 'tag';
    case ETaxonomy.WordTag:
      return 'devinitions/tag';
    default:
    case ETaxonomy.WordCategory:
      return 'devinitions/category';
  }
};

/* tslint:disable */
declare namespace Core {
  export type TTheme =
    'brand' |
    'alpha' |
    'beta' |
    'gamma' |
    'psi' |
    'omega' |
    'tint-alpha' |
    'tint-beta' |
    'tint-gamma' |
    'tint-psi' |
    'tint-omega' |
    'gradient-brand' | ETheme;

  export type TLayout = 'core' | 'basic';

  export type TMimeType = 'image/png' | string;

  export type TTag = 'div' | 'section' | 'aside' | 'article' | 'span' | 'nav';

  export type TPriority =
    | '1'
    | 1
    | '2'
    | 2
    | '3'
    | 3
    | '4'
    | 4
    | '5'
    | 5
    | '6'
    | 6 | EPriority;

  export type TColumn =
    | '1'
    | 1
    | '2'
    | 2
    | '3'
    | 3
    | '4'
    | 4
    | '5'
    | 5
    | '6'
    | 6
    | '7'
    | 7
    | '8'
    | 8
    | '9'
    | 9
    | '10'
    | 10
    | '11'
    | 11
    | '12'
    | 12 | EColumn;

  export type TTheme =
    | 'brand'
    | 'alpha'
    | 'beta'
    | 'gamma'
    | 'psi'
    | 'omega'
    | 'tint-alpha'
    | 'tint-beta'
    | 'tint-gamma'
    | 'tint-psi'
    | 'tint-omega'
    | 'gradient-brand' | ETheme;

  export type TLinkBehaviour = 'router' | 'anchor' | 'action';

  export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | ESize;

  export type TLinkType = 'button' | 'submit' | 'reset';

  export type TOnClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLElement>
  ) => void;

  export type TOnSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLElement>
  ) => void;

  export type TFormField = 'input' | 'select';

  export type TInputType = 'text' | 'password' | 'date' | 'email' | 'number';

  export type TFormFieldType =
    | 'text'
    | 'password'
    | 'date'
    | 'email'
    | 'select'
    | 'number';

  export type TSuccessCode = string | number;

  export type TErrorCode = string | number;

  enum EWordExample {
    Codepen = 'codepen',
    CodeBlock = 'code-block'
  }

  enum ETheme {
    Brand = 'brand',
    Alpha = 'alpha',
    Beta = 'beta',
    Gamma = 'gamma',
    Psi = 'psi',
    Omega = 'omega',
    TintAlpha = 'tint-alpha',
    TintBeta = 'tint-beta',
    TintGamma = 'tint-gamma',
    TintPsi = 'tint-psi',
    TintOmega = 'tint-omega',
    GradientBrand = 'gradient-brand'
  }

  enum EContrast {
    Light = 'light',
    Gray = 'gray',
    Dark = 'dark'
  }

  enum EPosition {
    Left = 'left',
    Right = 'right',
    Center = 'center'
  }

  enum ETaxonomy {
    Category = 'category',
    WordCategory = 'word_category',
    PostTag = 'post_tag',
    WordTag = 'word_tag'
  }

  enum EPriority {
    One = '1',
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6'
  }

  enum EColumn {
    One = '1',
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6',
    Seven = '7',
    Eight = '8',
    Nine = '9',
    Ten = '10',
    Eleven = '11',
    Twelve = '12',
  }

  enum ESize {
    Xs = 'xs',
    Sm = 'sm',
    Md = 'md',
    Lg = 'lg',
    Xl = 'xl'
  }

  export interface IYoastMeta {
    /**
     *
     *
     **/
    yoast_wpseo_title: string;
    /**
     *
     *
     **/
    yoast_wpseo_metadesc: string;
  }

  export interface IAcfCore {
    /**
     *
     *
     **/
    page_theme: TTheme;
    /**
     *
     *
     **/
    components: Partial<IAcfComponent>[];
  }

  export interface IAcfComponentCore {
    /**
     *
     *
     **/
    className?: string;
    /**
     *
     *
     **/
    components: Partial<IAcfComponent>[];
    /**
     *
     *
     **/
    page_theme: TTheme;
  }

  export interface IAcfComponent {
    /**
     *
     *
     */
    className: string;
    /**
     *
     *
     */
    page_theme: TTheme;
    /**
     *
     *
     */
    highlight: TTheme;
    /**
     *
     *
     */
    acf_fc_layout: string;
    /**
     *
     *
     */
    content: string;
    /**
     *
     *
     */
    author: string;
    /**
     *
     *
     */
    quote: string;
    /**
     *
     *
     **/
    heading: string;
    /**
     *
     *
     */
    subheading: string;
    /**
     *
     *
     **/
    copy: string;
    /**
     *
     *
     **/
    cta: boolean;
    /**
     *
     *
     **/
    cta_text: string;
    /**
     *
     *
     **/
    cta_link: any;
    /**
     *
     *
     **/
    cta_theme: ETheme;
    /**
     *
     *
     **/
    theme: ETheme;
    /**
     *
     *
     */
    brand_zip_file: any;
    /**
     *
     *
     */
    image: any;
    /**
     *
     *
     */
    text_content: string;
    /**
     *
     *
     */
    fixed: boolean;
    /**
     *
     *
     */
    position: EPosition;
    /**
     *
     *
     */
    /**
     *
     *
     */
    /**
     *
     *
     */
  }

  export interface ICoreOptions {
    /**
     *
     *
     **/
    address: string;
    /**
     *
     *
     **/
    company_name: string;
    /**
     *
     *
     **/
    company_slogan: string;
    /**
     *
     *
     **/
    facebook: string;
    /**
     *
     *
     **/
    general_email: string;
    /**
     *
     *
     **/
    instagram: string;
    /**
     *
     *
     **/
    linkedin: string;
    /**
     *
     *
     **/
    twitter: string;
    /**
     *
     *
     **/
    youtube: string;
    /**
     *
     *
     **/
    mailchimp_list_id: number;
    /**
     *
     *
     **/
    logo_symbol?: IMedia;
    /**
     *
     *
     **/
    main_logo?: IMedia;
    /**
     *
     *
     **/
    social_logo?: IMedia;
    /**
     *
     *
     **/
    sponsors?: ISponsors[];
    /**
     *
     *
     */
    testimonials?: ITestimonials[];
  }

  export interface IMedia {
    /**
     *
     *
     */
    id: number;
    /**
     *
     *
     */
    title: string;
    /**
     *
     *
     */
    filename: string;
    /**
     *
     *
     */
    filesize: number;
    /**
     *
     *
     */
    url: string;
    /**
     *
     *
     */
    link: string;
    /**
     *
     *
     */
    alt: string;
    /**
     *
     *
     */
    author: string;
    /**
     *
     *
     */
    description: string;
    /**
     *
     *
     */
    short_description: string;
    /**
     *
     *
     */
    caption: string;
    /**
     *
     *
     */
    name: string;
    /**
     *
     *
     */
    status: string;
    /**
     *
     *
     */
    uploaded_to: number;
    /**
     *
     *
     */
    date: string;
    /**
     *
     *
     */
    modified: string;
    /**
     *
     *
     */
    menu_order: number;
    /**
     *
     *
     */
    mime_type: TMimeType;
    /**
     *
     *
     */
    type: string;
    /**
     *
     *
     */
    subtype: string;
    /**
     *
     *
     */
    icon: string;
    /**
     *
     *
     */
    width: number;
    /**
     *
     *
     */
    height: number;
    /**
     *
     *
     */
    sizes: IMediaSizes;
  }

  export interface IMediaSources {
    /**
     *
     *
     */
    thumbnail: string;
    /**
     *
     *
     */
    medium: string;
    /**
     *
     *
     */
    medium_large: string;
    /**
     *
     *
     */
    large: string;
  }

  export interface IMediaSizes {
    /**
     *
     *
     */
    thumbnail: string;
    /**
     *
     *
     */
    width: number;
    /**
     *
     *
     */
    height: number;
    /**
     *
     *
     */
    medium: string;
    /**
     *
     *
     */
    width: number;
    /**
     *
     *
     */
    height: number;
    /**
     *
     *
     */
    medium_large: string;
    /**
     *
     *
     */
    width: number;
    /**
     *
     *
     */
    height: number;
    /**
     *
     *
     */
    large: string;
    /**
     *
     *
     */
    width: number;
    /**
     *
     *
     */
    height: number;
  }

  export interface ISponsors {
    /**
     *
     *
     **/
    name: string;
    /**
     *
     *
     **/
    image: IMedia;
  }

  export interface ITestimonials {
    /**
     *
     *
     **/
    name: string;
    /**
     *
     *
     **/
    content: string;
  }

  export interface IErrorResponse {
    /**
     *
     *
     **/
    message: string;
    /**
     *
     *
     **/
    hasError: boolean;
    /**
     *
     *
     **/
    code: TErrorCode;
  }

  export interface IMetaTag {
    /**
     *
     *
     **/
    name: string;
    /**
     *
     *
     **/
    content: string;
    /**
     *
     *
     **/
    property: string;
  }

  export interface IMenuItem {
    /**
     *
     *
     **/
    title: string;
    /**
     *
     *
     **/
    slug: string;
    /**
     *
     *
     **/
    description: string;
    /**
     *
     *
     **/
    url: string;
    /**
     *
     *
     **/
    classes: string[];
    /**
     *
     *
     **/
    menu_item_parent: string;
  }

  export interface IWordAcf {
    /**
     *
     *
     **/
    examples?: IWordExample[];
    /**
     *
     *
     **/
    origin: Core.IWordOrigin;
    /**
     *
     *
     **/
    page_theme: TTheme;
    /**
     *
     *
     **/
    part_of_speech: string;
    /**
     *
     *
     **/
    pronunciation: string;
    /**
     *
     *
     **/
    syllables: IWordSyllables;
    /**
     *
     *
     **/
    synonyms: IWordSynonym[]
  }

  export interface IWordExample {
    /**
     *
     *
     **/
    type: EWordExample;
    /**
     *
     *
     **/
    codepen_url?: string;
    /**
     *
     *
     **/
    code?: string;
  }

  export interface IWordOrigin {
    /**
     *
     *
     **/
    value: string;
    /**
     *
     *
     **/
    label: string;
  }

  export interface IWordSynonym {
    /**
     *
     *
     **/
    post_name: string;
    /**
     *
     *
     **/
    post_title: string;
  }

  export interface IWordSyllables {
    /**
     *
     *
     **/
    count: string | number;
    /**
     *
     *
     **/
    list: IWordSyllableItem[]
  }

  export interface IWordSyllableItem {
    /**
     *
     *
     **/
    item: string;
  }

  export interface ITaxonomyTerm {
    /**
     *
     *
     **/
    term_id: number;
    /**
     *
     *
     **/
    name: string;
    /**
     *
     *
     **/
    slug: string;
    /**
     *
     *
     **/
    term_group: number;
    /**
     *
     *
     **/
    term_taxonomy_id: number;
    /**
     *
     *
     **/
    taxonomy: ETaxonomy,
    /**
     *
     *
     **/
    description: string,
    /**
     *
     *
     **/
    parent: number,
    /**
     *
     *
     **/
    count: number,
  }
}

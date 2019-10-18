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

  export enum ETheme {
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

  export enum EContrast {
    Light = 'light',
    Gray = 'gray',
    Dark = 'dark'
  }

  export enum EPosition {
    Left = 'left',
    Right = 'right',
    Center = ' center'
  }

  export enum ETaxonomy {
    Category = 'category',
    WordCategory = 'word_category',
    PostTag = 'post_tag',
    WordTag = 'word_tag'
  }

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

  export enum EPriority {
    One = '1',
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6'
  }

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
    | 12;

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
    | 'gradient-brand' | string;

  export type TLinkBehaviour = 'router' | 'anchor' | 'action';

  export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  export enum ESize {
    Xs = 'xs',
    Sm = 'sm',
    Md = 'md',
    Lg = 'lg',
    Xl = 'xl'
  }

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

  export type TSuccessCode = 200;

  export type TErrorCode = 404 | 500;

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
    component: Partial<IAcfComponentCore>[];
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
    component: Partial<IAcfComponent>;
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
    acf_fc_layout: string;
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
    ID: number;
    /**
     *
     *
     **/
    menu_order: number;
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
    url: string;
    /**
     *
     *
     **/
    description: string;
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

}

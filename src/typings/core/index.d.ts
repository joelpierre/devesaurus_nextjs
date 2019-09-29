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
    'gradient-brand';

  export type TMimeType = 'image/png' | string;

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
    components: Partial<IAcfComponents>[];
  }

  export interface IAcfComponents {

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

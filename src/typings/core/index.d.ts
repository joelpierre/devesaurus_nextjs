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

  export interface IYoastMeta {
    yoast_wpseo_title: string;
    yoast_wpseo_metadesc: string;
  }

  export interface IAcfCore {
    page_theme: TTheme;
    components: Partial<IAcfComponents>[];
  }

  export interface IAcfComponents {

  }

}

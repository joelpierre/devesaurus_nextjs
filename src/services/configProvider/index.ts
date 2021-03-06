/* tslint:disable */
import Provider from '../Provider';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const envConfig = publicRuntimeConfig;

export type Config = {
  readonly PORT: string;
  readonly PROTOCOL: string;

  readonly APP_LANG: string;
  readonly API_URL: string;
  readonly BASE_URL: string;
  readonly SITE_URL: string;

  readonly RUN_ENV: 'dev' | 'prod' | 'test' | 'local';
  readonly NODE_ENV: 'development' | 'production' | 'test';

  readonly APP_TITLE: string;
  readonly SITE_TITLE: string;
  readonly SITE_DESCRIPTION: string;
  readonly SITE_AUTHOR: string;
  readonly APP_KEYWORDS: string;

  readonly GTM_ID: string;
  readonly GTM_AUTH: string;

  readonly ITEMS_PER_PAGE: string;
};

const ConfigProvider = new Provider<Config & NodeJS.ProcessEnv, keyof Config>('ConfigProvider', envConfig as Config);

export default ConfigProvider;

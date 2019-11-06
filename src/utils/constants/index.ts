import ConfigProvider from '../../services/configProvider';

export const APP_TITLE = ConfigProvider.getValue('APP_TITLE') || '';
export const SITE_DESCRIPTION = ConfigProvider.getValue('SITE_DESCRIPTION') || '';

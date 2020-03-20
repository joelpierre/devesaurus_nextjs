import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import ConfigProvider from '../../services/configProvider';

const PROTOCOL = ConfigProvider.getValue('PROTOCOL');
const BASE_URL = ConfigProvider.getValue('BASE_URL');

const internalAxiosInstance: AxiosInstance = axios.create({
  baseURL: `${PROTOCOL}://${BASE_URL}/api`,
});

internalAxiosInstance.interceptors.request.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default internalAxiosInstance;

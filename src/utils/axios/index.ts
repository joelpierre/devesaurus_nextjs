import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import ConfigProvider from '../../services/configProvider';

const PROTOCOL = ConfigProvider.getValue('PROTOCOL');
const API_URL = ConfigProvider.getValue('API_URL');

const defaultAxiosInstance: AxiosInstance = axios.create({
  baseURL: `${PROTOCOL}://${API_URL}/wp-json/better-rest-endpoints/v1`
});

defaultAxiosInstance.interceptors.request.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default defaultAxiosInstance;

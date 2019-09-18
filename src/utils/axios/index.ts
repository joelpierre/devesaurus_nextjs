import axios from 'axios';

const defaultInstance = axios.create({
  baseURL: `${process.env.PROTOCOL}://${process.env.API_URL}/wp-json`
});

defaultInstance.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

export default defaultInstance;

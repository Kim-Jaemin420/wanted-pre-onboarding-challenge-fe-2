import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { getLocalStorage } from '@/utils';
import { ACCESS_TOKEN, HTTP_METHODS } from '@/consts';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getLocalStorage(ACCESS_TOKEN);

    if (config.headers) (config.headers as AxiosHeaders).set('Authorization', token);

    return config;
  },
  (error) => Promise.reject(error)
);

const createApiMethod =
  (axiosInstance: AxiosInstance, method: Method) => (config: AxiosRequestConfig) => {
    axiosInstance.interceptors.response.use((response) => {
      return response;
    });

    return axiosInstance({
      ...config,
      method,
    });
  };

const api = {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  patch: createApiMethod(axiosInstance, HTTP_METHODS.PATCH),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};

export default api;

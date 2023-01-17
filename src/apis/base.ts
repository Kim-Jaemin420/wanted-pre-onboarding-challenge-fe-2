import { HTTP_METHODS } from '@/consts';
import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

const createApiMethod =
  (axiosInstance: AxiosInstance, method: Method) =>
  (config: AxiosRequestConfig) => {
    axiosInstance.interceptors.response.use((response) => {
      return response;
    });

    return axiosInstance({
      ...config,
      method,
    });
  };

export default {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  patch: createApiMethod(axiosInstance, HTTP_METHODS.PATCH),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};

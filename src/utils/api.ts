import { AxiosError, isAxiosError } from 'axios';

export const throwError = (error: AxiosError) => {
  if (!error.response) throw error;

  if (isAxiosError(error)) {
    throw error.response.data.details;
  }
};

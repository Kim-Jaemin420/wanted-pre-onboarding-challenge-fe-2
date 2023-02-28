import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AuthContext } from '@/context';
import { signin } from '@/apis';
import { HTTP_ERRORS } from '@/consts';
import { User } from '@/types';

const usePostLogin = () => {
  const { setToken } = useContext(AuthContext);

  return useMutation({
    mutationFn: ({ email, password }: User) => signin({ email, password }),
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === HTTP_ERRORS.BAD_REQUEST) {
          alert(error.response.data.details);
        }

        console.error(error);
      }
    },
    onSuccess: (data) => {
      setToken(data.token);
      alert(data.message);
    },
  });
};

export default usePostLogin;

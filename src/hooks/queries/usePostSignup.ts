import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AuthContext } from '@/context';
import { signup } from '@/apis';
import { HTTP_ERRORS } from '@/consts';
import { User } from '@/types';

const usePostSignup = () => {
  const { setToken } = useContext(AuthContext);

  return useMutation({
    mutationFn: ({ email, password }: User) => signup({ email, password }),
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === HTTP_ERRORS.CONFLICT) {
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

export default usePostSignup;

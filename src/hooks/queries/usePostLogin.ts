import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { signin } from '@/apis';
import { useModal } from '@/hooks';
import { HTTP_ERRORS } from '@/consts';
import { User } from '@/types';

const usePostLogin = () => {
  const { openModal, setModalMessage } = useModal();

  return useMutation({
    mutationFn: ({ email, password }: User) => signin({ email, password }),
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === HTTP_ERRORS.BAD_REQUEST) {
          openModal();
          setModalMessage(error.response.data.details);
        }

        console.error(error);
      }
    },
    onSuccess: (data) => {
      openModal();
      setModalMessage(data.message);
    },
  });
};

export default usePostLogin;

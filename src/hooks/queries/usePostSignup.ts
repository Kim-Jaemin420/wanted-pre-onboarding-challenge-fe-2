import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useModal } from '@/hooks';
import { signup } from '@/apis';
import { HTTP_ERRORS } from '@/consts';
import { User } from '@/types';

const usePostSignup = () => {
  const { openModal, setModalMessage } = useModal();

  return useMutation({
    mutationFn: ({ email, password }: User) => signup({ email, password }),
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === HTTP_ERRORS.CONFLICT) {
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

export default usePostSignup;

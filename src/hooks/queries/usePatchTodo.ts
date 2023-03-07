import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from '@/apis';
import { useModal } from '@/hooks';
import { UpdateTodoRequest } from '@/types';
import { TODO_KEYS } from '@/consts';

const usePatchTodo = () => {
  const queryClient = useQueryClient();
  const { openModal, setModalMessage } = useModal();

  return useMutation({
    mutationFn: ({ id, title, content }: UpdateTodoRequest) => updateTodo({ id, title, content }),
    onError: () => {
      openModal();
      setModalMessage('수정이 실패하였습니다.');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODO_KEYS.lists() });
      openModal();
      setModalMessage('수정되었습니다.');
    },
  });
};

export default usePatchTodo;

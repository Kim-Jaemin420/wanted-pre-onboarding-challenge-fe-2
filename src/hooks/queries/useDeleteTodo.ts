import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from '@/apis';
import { TODO_KEYS } from '@/consts';
import { useModal } from '@/hooks';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const { openModal, setModalMessage } = useModal();

  return useMutation({
    mutationFn: (id: string) => deleteTodo({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODO_KEYS.lists() });
      openModal();
      setModalMessage('삭제 되었습니다.');
    },
  });
};

export default useDeleteTodo;

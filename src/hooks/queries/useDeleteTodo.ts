import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from '@/apis';
import { TODO_KEYS } from '@/consts';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTodo({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODO_KEYS.lists() });
    },
  });
};

export default useDeleteTodo;

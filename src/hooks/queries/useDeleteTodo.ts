import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from '@/apis';
import { TODO_KEYS } from '@/consts';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isSuccess, error } = useMutation({
    mutationFn: (id: string) => deleteTodo({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODO_KEYS.lists() });
    },
  });

  return {
    mutate,
    isSuccess,
    error,
  };
};

export default useDeleteTodo;

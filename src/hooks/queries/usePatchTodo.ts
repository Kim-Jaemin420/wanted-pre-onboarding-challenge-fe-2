import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from '@/apis';
import { UpdateTodoRequest } from '@/types';
import { TODO_KEYS } from '@/consts';

const usePatchTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, title, content }: UpdateTodoRequest) => updateTodo({ id, title, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODO_KEYS.lists() });
    },
  });
};

export default usePatchTodo;

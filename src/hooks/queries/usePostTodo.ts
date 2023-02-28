import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '@/apis';
import { TODO_KEYS } from '@/consts';
import { CreateTodoRequest } from '@/types';

const usePostTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ title, content }: CreateTodoRequest) => createTodo({ title, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODO_KEYS.lists() });
    },
  });
};

export default usePostTodo;

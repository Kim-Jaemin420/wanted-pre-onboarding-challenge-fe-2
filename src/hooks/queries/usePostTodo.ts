import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '@/apis';
import { TODO_KEYS } from '@/consts/query';
import { CreateTodoRequest } from '@/types';

const usePostTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess, error, data } = useMutation(createTodo, {
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: TODO_KEYS.lists() });

      const previousTodos = queryClient.getQueryData(TODO_KEYS.lists());

      await queryClient.setQueryData<Array<CreateTodoRequest>>(
        TODO_KEYS.lists(),
        (oldTodo) => oldTodo && [...oldTodo, newTodo]
      );

      return previousTodos;
    },

    onError: (error, newTodo, previoustTodos) => {
      queryClient.setQueryData(TODO_KEYS.lists(), previoustTodos);
    },

    onSettled: () => {
      queryClient.invalidateQueries(TODO_KEYS.lists());
    },
  });

  return {
    mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
};

export default usePostTodo;

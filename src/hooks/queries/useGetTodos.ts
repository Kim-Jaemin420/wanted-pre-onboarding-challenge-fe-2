import { useQuery } from '@tanstack/react-query';
import { getTodos } from '@/apis';
import { TODO_KEYS } from '@/consts';

const useGetTodos = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: TODO_KEYS.lists(),
    queryFn: getTodos,
    staleTime: 10000,
  });

  return {
    todos: data ?? [],
    isLoading,
    error,
  };
};

export default useGetTodos;

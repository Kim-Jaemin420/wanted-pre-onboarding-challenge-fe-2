import { useQuery } from '@tanstack/react-query';
import { getTodos } from '@/apis';

const useGetTodos = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    staleTime: 10000,
  });

  return {
    todos: data ? data.data : [],
    isLoading,
    error,
  };
};

export default useGetTodos;

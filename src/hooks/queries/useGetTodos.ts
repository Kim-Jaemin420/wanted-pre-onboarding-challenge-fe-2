import { useQuery } from '@tanstack/react-query';
import { getTodos } from '@/apis';
import { TODO_KEYS } from '@/consts';

const useGetTodos = () => {
  return useQuery({
    queryKey: TODO_KEYS.lists(),
    queryFn: getTodos,
    staleTime: 10000,
  });
};

export default useGetTodos;

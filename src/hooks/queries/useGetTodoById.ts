import { useQuery } from '@tanstack/react-query';
import { getTodoById } from '@/apis';
import { TODO_KEYS } from '@/consts';

const useGetTodoById = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: TODO_KEYS.detail(id),
    queryFn: () => getTodoById({ id }),
    staleTime: 10000,
    enabled: !!id,
  });

  return {
    todoById: data,
    isLoading,
    error,
  };
};

export default useGetTodoById;

import { useQuery } from '@tanstack/react-query';
import { getTodoById } from '@/apis';
import { TODO_KEYS } from '@/consts';

const useGetTodoById = (id: string) => {
  return useQuery({
    queryKey: TODO_KEYS.list(id),
    queryFn: () => getTodoById({ id }),
    staleTime: 10000,
    enabled: !!id,
  });
};

export default useGetTodoById;

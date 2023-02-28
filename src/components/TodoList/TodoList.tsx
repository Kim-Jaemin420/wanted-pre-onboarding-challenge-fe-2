import { TodoItem } from '@/components';
import { useGetTodos } from '@/hooks';
import { TodoResponse } from '@/types';
import { ListContainer } from './todoListStyle';

function TodoList() {
  const { data: todos } = useGetTodos();

  return (
    <ListContainer>
      {todos?.map((todo: TodoResponse) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListContainer>
  );
}

export default TodoList;

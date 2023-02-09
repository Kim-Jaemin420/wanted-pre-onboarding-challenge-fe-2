import { TodoItem } from '@/components';
import { useGetTodos } from '@/hooks';
import { TodoResponse } from '@/types';
import { ListContainer } from './todoListStyle';

function TodoList() {
  const { todos } = useGetTodos();

  return (
    <ListContainer>
      {todos.data.map((todo: TodoResponse) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListContainer>
  );
}

export default TodoList;

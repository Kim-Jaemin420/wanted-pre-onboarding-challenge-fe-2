import { Dispatch, SetStateAction } from 'react';
import { TodoItem } from '@/components';
import { TodoResponse } from '@/types';
import { ListContainer } from './todoListStyle';
import { useGetTodos } from '@/hooks';

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

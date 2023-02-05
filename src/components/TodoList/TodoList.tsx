import { Dispatch, SetStateAction } from 'react';
import { TodoItem } from '@/components';
import { TodoResponse } from '@/types';
import { ListContainer } from './todoListStyle';

interface Props {
  todos: TodoResponse[];
}

function TodoList({ todos }: Props) {
  return (
    <ListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListContainer>
  );
}

export default TodoList;

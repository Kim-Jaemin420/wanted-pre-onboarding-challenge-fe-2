import { Dispatch, SetStateAction } from 'react';
import { TodoItem } from '@/components';
import { TodoResponse } from '@/types';
import { ListContainer } from './todoListStyle';

interface Props {
  todos: TodoResponse[];
  setTodos: Dispatch<SetStateAction<TodoResponse[]>>;
}

function TodoList({ todos, setTodos }: Props) {
  return (
    <ListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ListContainer>
  );
}

export default TodoList;

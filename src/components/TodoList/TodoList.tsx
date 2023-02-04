import { TodoItem } from '@/components';
import { Todo } from '@/types';
import { ListContainer } from './todoListStyle';

interface Props {
  todos: Todo[];
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

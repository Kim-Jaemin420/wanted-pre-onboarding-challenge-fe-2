import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { TodoForm, TodoList } from '@/components';
import { getTodos } from '@/apis';
import { TodoResponse } from '@/types';
import { TodoFormContainer, TodosContainer } from './todosStyle';

function Todos() {
  const [todos, setTodos] = useState<TodoResponse[]>([]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const { data } = await getTodos();

        setTodos(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getTodoList();
  }, []);

  return (
    <div
      css={css`
        width: 110rem;
        height: 100vh;
        margin: auto;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
      `}
    >
      <TodoFormContainer>
        <TodoForm setTodos={setTodos} />
      </TodoFormContainer>

      <TodosContainer>
        <TodoList todos={todos} />
      </TodosContainer>
    </div>
  );
}

export default Todos;

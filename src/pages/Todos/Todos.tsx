import { css } from '@emotion/react';
import { TodoForm, TodoList, Modal } from '@/components';
import { TodoFormContainer, TodosContainer } from './todosStyle';

function Todos() {
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
        <TodoForm />
      </TodoFormContainer>

      <TodosContainer>
        <TodoList />
      </TodosContainer>
      <Modal />
    </div>
  );
}

export default Todos;

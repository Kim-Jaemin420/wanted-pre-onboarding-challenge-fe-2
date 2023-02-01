import { css } from '@emotion/react';
import { a11yHidden } from '@/styles';
import { AddButton, TodoInput } from './todoFormStyle';

function TodoForm() {
  return (
    <form
      css={css`
        width: 60rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        margin: 4rem 0;
      `}
    >
      <legend css={a11yHidden}>todo 작성하기</legend>
      <TodoInput label="오늘 할 일이 무엇인가요?" variant="outlined" fullWidth />
      <AddButton variant="outlined">추가</AddButton>
    </form>
  );
}

export default TodoForm;

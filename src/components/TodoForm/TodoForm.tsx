import React from 'react';
import { css } from '@emotion/react';
import { a11yHidden } from '@/styles';
import { TodoDetailInput, AddButton, TodoInput } from './todoFormStyle';

function TodoForm() {
  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      css={css`
        margin: 4rem 0;
      `}
      onSubmit={handleSubmitForm}
    >
      <legend css={a11yHidden}>todo 작성하기</legend>
      <div
        css={css`
          padding: 0 1.5rem;
        `}
      >
        <TodoInput label="오늘 할 일이 무엇인가요?" name="title" variant="outlined" fullWidth />
        <TodoDetailInput
          id="outlined-multiline-static"
          label="할 일에 대한 설명을 적어주세요."
          name="content"
          multiline
          rows={15}
          variant="outlined"
          fullWidth
        />

        <div
          css={css`
            text-align: right;
          `}
        >
          <AddButton variant="outlined" type="submit">
            추가
          </AddButton>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;

import React from 'react';
import { AxiosError } from 'axios';
import { css } from '@emotion/react';
import { createTodo } from '@/apis';
import { a11yHidden } from '@/styles';
import { TodoDetailInput, AddButton, TodoInput } from './todoFormStyle';

function TodoForm() {
  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { todoTitle, content } = event.currentTarget;

    try {
      await createTodo({
        title: todoTitle.value,
        content: content.value,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
      }
    }
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
          padding: 0 3rem;
        `}
      >
        <TodoInput label="오늘 할 일이 무엇인가요?" name="todoTitle" variant="outlined" fullWidth />
        <TodoDetailInput
          id="outlined-multiline-static"
          label="할 일에 대한 설명을 적어주세요."
          name="content"
          multiline
          rows={18}
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

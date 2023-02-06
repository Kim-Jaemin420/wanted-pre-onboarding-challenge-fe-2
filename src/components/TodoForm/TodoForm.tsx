import React, { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AxiosError } from 'axios';
import { css } from '@emotion/react';
import { createTodo } from '@/apis';
import { TodoRequest, TodoResponse } from '@/types';
import { PAGE_ROUTE } from '@/consts';
import { TodoDetailInput, AddButton, TodoInput } from './todoFormStyle';

interface Props {
  setTodos: Dispatch<SetStateAction<TodoResponse[]>>;
}

function TodoForm({ setTodos }: Props) {
  const navigate = useNavigate();
  const { todoId } = useParams();

  const [todo, setTodo] = useState<TodoRequest>({
    title: '',
    content: '',
  });

  const handleChangeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((previousTodo) => ({
      ...previousTodo,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, content } = todo;

    try {
      const { data } = await createTodo({
        title,
        content,
      });

      setTodo({ title: '', content: '' });
      setTodos((todos) => [...todos, data.data]);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
      }
    }
  };

  const handleClickCloseButton = () => {
    navigate(PAGE_ROUTE.HOME);
  };

  return (
    <form
      css={css`
        margin: 4rem 0;
      `}
      onSubmit={handleSubmitForm}
    >
      <legend
        css={css`
          text-align: center;
          margin-bottom: 3rem;
        `}
      >
        오늘의 할 일
      </legend>
      <div
        css={css`
          padding: 0 3rem;
        `}
      >
        <TodoInput
          label="오늘 할 일이 무엇인가요?"
          name="todoTitle"
          variant="outlined"
          fullWidth
          value={todo.title}
          onChange={handleChangeTodo}
        />
        <TodoDetailInput
          id="outlined-multiline-static"
          label="할 일에 대한 설명을 적어주세요."
          name="content"
          multiline
          rows={18}
          variant="outlined"
          fullWidth
          value={todo.content}
          onChange={handleChangeTodo}
        />

        <div
          css={css`
            text-align: right;
          `}
        >
          {todoId && (
            <>
              <AddButton variant="outlined">수정</AddButton>
              <AddButton variant="outlined">삭제</AddButton>
              <AddButton variant="outlined" onClick={handleClickCloseButton}>
                닫기
              </AddButton>
            </>
          )}
          {!todoId && (
            <AddButton variant="outlined" type="submit">
              추가
            </AddButton>
          )}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Params, useNavigate, useParams } from 'react-router';
import { css } from '@emotion/react';
import { usePostTodo, useGetTodoById } from '@/hooks';
import { updateTodo } from '@/apis';
import { CreateTodoRequest, TodoResponse } from '@/types';
import { PAGE_ROUTE } from '@/consts';
import { TodoDetailInput, AddButton, TodoInput } from './todoFormStyle';

interface QueryParamTypes extends Params {
  todoId: string;
}
interface Props {
  setTodos: Dispatch<SetStateAction<TodoResponse[]>>;
}

function TodoForm({ setTodos }: Props) {
  const navigate = useNavigate();
  const { todoId } = useParams() as QueryParamTypes;

  const { mutate, isSuccess } = usePostTodo();
  const { todoById } = useGetTodoById(todoId);

  const [todo, setTodo] = useState<CreateTodoRequest>({
    title: '',
    content: '',
  });

  useEffect(() => {
    if (!todoById) return;

    setTodo({ title: todoById.title, content: todoById.content });
  }, [todoById]);

  const handleChangeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((previousTodo: CreateTodoRequest) => ({
      ...previousTodo,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, content } = todo;
    mutate({ title, content });

    if (isSuccess) {
      setTodo({ title: '', content: '' });
    }
  };

  const handleClickEditButton = async () => {
    try {
      const { data } = await updateTodo({ id: todoId, title: todo.title, content: todo.content });

      setTodos((todos) => todos.map((todo) => (todo.id === todoId ? data.data : todo)));
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickCloseButton = () => {
    setTodo({ title: '', content: '' });
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
          name="title"
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
              <AddButton variant="outlined" onClick={handleClickEditButton}>
                수정
              </AddButton>
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

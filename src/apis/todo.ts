import api from './base';
import { CreateTodoRequest } from '@/types';

export const createTodo = ({ title, content }: CreateTodoRequest) =>
  api.post({
    url: '/todos',
    data: { title, content },
  });

export const getTodos = () =>
  api.get({
    url: '/todos',
  });

export const getTodoById = ({ id }: { id: string }) =>
  api.get({
    url: `/todos/${id}`,
  });

export const updateTodo = ({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: string;
}) =>
  api.put({
    url: `/todos/${id}`,
    data: { title, content },
  });

export const deleteTodo = ({ id }: { id: string }) =>
  api.delete({
    url: `/todos/${id}`,
  });

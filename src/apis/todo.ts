import api from './base';
import { TodoRequest } from '@/types';

export const createTodo = ({ title, content }: TodoRequest) =>
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

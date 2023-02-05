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

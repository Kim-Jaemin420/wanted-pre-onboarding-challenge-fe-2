import api from './base';
import { Todo } from '@/types';

export const createTodo = ({ title, content }: Todo) =>
  api.post({
    url: '/todos',
    data: { title, content },
  });

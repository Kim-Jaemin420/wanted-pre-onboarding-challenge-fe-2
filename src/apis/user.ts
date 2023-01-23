import { User } from '@/types';
import api from './base';

export const signup = ({ email, password }: User) =>
  api.post({
    url: '/users/create',
    data: { email, password },
  });

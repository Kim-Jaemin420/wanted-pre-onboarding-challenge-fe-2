import { User } from '@/types';
import { throwError } from '@/utils';
import api from './base';

export const signup = ({ email, password }: User) =>
  api
    .post({
      url: '/users/create',
      data: { email, password },
    })
    .then((response) => response.data);

export const signin = ({ email, password }: User) =>
  api
    .post({
      url: '/users/login',
      data: { email, password },
    })
    .then((response) => response.data);

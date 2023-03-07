import { AuthError, AuthField } from '@/types';

const validateEmail = (email: string, errors: AuthError) => {
  const EMAIL_REGEX =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (!EMAIL_REGEX.test(email)) {
    errors.email = '이메일 형식에 맞게 작성해주세요.';
    return errors;
  }

  delete errors.email;

  return errors;
};

const validatePasswords = (password: string, errors: AuthError, passwordConfirm?: string) => {
  const MINIMUM_PASSWORD_LENGTH = 8;

  if (password.length >= MINIMUM_PASSWORD_LENGTH) delete errors.password;

  if (passwordConfirm && password !== passwordConfirm) {
    if (password && password.length < MINIMUM_PASSWORD_LENGTH)
      errors.password = '비밀번호는 8자리 이상 입력해주세요.';

    errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    return errors;
  }

  if (password.length < MINIMUM_PASSWORD_LENGTH) {
    errors.password = '비밀번호는 8자리 이상 입력해주세요.';
    return errors;
  }

  delete errors.password;
  delete errors.passwordConfirm;

  return errors;
};

export const validateForm = (
  formInputValues: AuthField,
  errorsState: AuthError,
  targetName?: string
) => {
  let errors = { ...errorsState };

  if (targetName === 'email') {
    errors = validateEmail(formInputValues.email, errors);
  }

  if (targetName === 'password' || targetName === 'passwordConfirm') {
    errors = validatePasswords(formInputValues.password, errors, formInputValues.passwordConfirm);
  }

  return errors;
};

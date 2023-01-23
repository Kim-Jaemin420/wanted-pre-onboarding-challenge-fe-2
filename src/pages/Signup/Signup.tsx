import { useState } from 'react';
import { css } from '@emotion/react';
import { SignupForm } from '@/components/index';
import { SignupFieldError } from '@/types';

const ERROR_TYPE = {
  INVALID_EMAIL: 'invalidEmail',
  INVALID_PASSWORD: 'invalidPassword',
  DIFFERENT_PASSWORD: 'differentPassword',
} as const;

const ERROR_MESSAGE = {
  invalidEmail: '이메일 형식에 맞게 작성해주세요.',
  invalidPassword: '비밀번호는 8자리 이상 입력해주세요.',
  differentPassword: '동일한 비밀번호를 작성해주세요.',
};

function Signup() {
  const [signupFieldErrorMessage, setSignupFieldErrorMessage] = useState<SignupFieldError>({
    emailErrorMessage: '',
    passwordErrorMessage: '',
    passwordConfirmErrorMessage: '',
  });

  const checkEmailErrorMessage = (email: string) => {
    const EMAIL_REGEX =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!EMAIL_REGEX.test(email)) {
      return ERROR_MESSAGE[ERROR_TYPE.INVALID_EMAIL];
    }

    return null;
  };

  const checkPasswordsErrorMessage = (
    password: string,
    passwordConfirm: string
  ): { passwordErrorMessage: string | null; passwordConfirmErrorMessage: string | null } => {
    const MIN_PASSWORD_LENGTH = 8;

    if (0 < password.length && password.length < MIN_PASSWORD_LENGTH) {
      return {
        passwordErrorMessage: '8자리 이상 입력해주세요',
        passwordConfirmErrorMessage: null,
      };
    }

    if (
      password.length >= MIN_PASSWORD_LENGTH &&
      passwordConfirm.length > 0 &&
      password !== passwordConfirm
    ) {
      return {
        passwordErrorMessage: '동일한 비밀번호를 입력해주세요.',
        passwordConfirmErrorMessage: '동일한 비밀번호를 입력해주세요.',
      };
    }

    if (password.length === 0 || passwordConfirm.length === 0) {
      return {
        passwordErrorMessage: '',
        passwordConfirmErrorMessage: '',
      };
    }

    return {
      passwordErrorMessage: null,
      passwordConfirmErrorMessage: null,
    };
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { emailField, passwordField, passwordConfirmField } = event.currentTarget;

    const email = emailField.value;
    const password = passwordField.value;
    const passwordConfirm = passwordConfirmField.value;

    console.log(emailField.value, passwordField.value, passwordConfirmField);
  };

  const handleChangeForm = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;

    const { emailField, passwordField, passwordConfirmField } = event.currentTarget;

    const emailErrorMessage = checkEmailErrorMessage(emailField.value);
    const { passwordErrorMessage, passwordConfirmErrorMessage } = checkPasswordsErrorMessage(
      passwordField.value,
      passwordConfirmField.value
    );

    if (target.name === 'emailField') {
      setSignupFieldErrorMessage((previousError) => ({
        ...previousError,
        emailErrorMessage,
      }));
    }

    if (target.name === 'passwordField' || target.name === 'passwordConfirmField') {
      setSignupFieldErrorMessage((previousError) => ({
        ...previousError,
        passwordErrorMessage,
        passwordConfirmErrorMessage,
      }));
    }
  };

  return (
    <div
      css={css`
        height: 100vh;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
      `}
    >
      <SignupForm
        handleSubmitForm={handleSubmitForm}
        handleChangeForm={handleChangeForm}
        error={signupFieldErrorMessage}
      />
    </div>
  );
}

export default Signup;

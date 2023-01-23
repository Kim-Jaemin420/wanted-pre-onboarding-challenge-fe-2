import { SignupFieldError } from '@/types';
import { css } from '@emotion/react';
import { TextField } from '@mui/material';
import { InputContainer, SubmitButton, ErrorMessage } from './signupFormStyle';

interface Props {
  handleSubmitForm: React.FormEventHandler<HTMLFormElement>;
  handleChangeForm: React.FormEventHandler<HTMLFormElement>;
  error: SignupFieldError;
}

function SignupForm({ handleSubmitForm, handleChangeForm, error }: Props) {
  console.log(error);

  return (
    <form
      css={css`
        width: 600px;
      `}
      onSubmit={handleSubmitForm}
      onChange={handleChangeForm}
    >
      <legend
        css={css`
          font-size: 18px;
          margin-bottom: 20px;
          text-align: center;
        `}
      >
        회원가입 하기
      </legend>
      <InputContainer>
        <TextField
          required
          variant="outlined"
          id="email"
          name="emailField"
          label="email"
          placeholder="email"
          fullWidth
          color={error.emailErrorMessage ? 'warning' : 'primary'}
        />
        <ErrorMessage>{error.emailErrorMessage}</ErrorMessage>
      </InputContainer>
      <InputContainer>
        <TextField
          required
          variant="outlined"
          id="password"
          name="passwordField"
          label="Password"
          type="password"
          fullWidth
          color={error.passwordErrorMessage ? 'warning' : 'primary'}
        />
        <ErrorMessage>{error.passwordErrorMessage}</ErrorMessage>
      </InputContainer>
      <InputContainer>
        <TextField
          required
          variant="outlined"
          id="passwordConfirm"
          name="passwordConfirmField"
          label="PasswordConfirm"
          type="password"
          fullWidth
          color={error.passwordConfirmErrorMessage ? 'warning' : 'primary'}
        />
        <ErrorMessage>{error.passwordConfirmErrorMessage}</ErrorMessage>
      </InputContainer>
      <SubmitButton
        type="submit"
        variant="outlined"
        name="submit"
        disabled={false}
        disableElevation
      >
        가입하기
      </SubmitButton>
    </form>
  );
}

export default SignupForm;

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
          error={!!error.emailErrorMessage}
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
          error={!!error.passwordErrorMessage}
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
          error={!!error.passwordConfirmErrorMessage}
        />
        <ErrorMessage>{error.passwordConfirmErrorMessage}</ErrorMessage>
      </InputContainer>
      <SubmitButton
        type="submit"
        variant="outlined"
        name="submit"
        disabled={
          error.emailErrorMessage !== null ||
          error.passwordErrorMessage !== null ||
          error.passwordConfirmErrorMessage !== null
        }
        disableElevation
      >
        가입하기
      </SubmitButton>
    </form>
  );
}

export default SignupForm;

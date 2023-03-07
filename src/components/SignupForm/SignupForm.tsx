import { AuthError } from '@/types';
import { css } from '@emotion/react';
import { TextField } from '@mui/material';
import { InputContainer, SubmitButton, ErrorMessage } from './signupFormStyle';

interface Props {
  handleSubmitForm: React.FormEventHandler<HTMLFormElement>;
  handleChangeForm: React.FormEventHandler<HTMLFormElement>;
  errors: AuthError;
}

function SignupForm({ handleSubmitForm, handleChangeForm, errors }: Props) {
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
          sx={{ label: { fontSize: '1.2rem' } }}
          id="email"
          name="email"
          label="email"
          placeholder="email"
          fullWidth
          error={!!errors.email}
        />
        <ErrorMessage>{errors.email}</ErrorMessage>
      </InputContainer>
      <InputContainer>
        <TextField
          required
          variant="outlined"
          sx={{ label: { fontSize: '1.2rem' } }}
          id="password"
          name="password"
          label="Password"
          type="password"
          fullWidth
          error={!!errors.password}
        />
        <ErrorMessage>{errors.password}</ErrorMessage>
      </InputContainer>
      <InputContainer>
        <TextField
          required
          variant="outlined"
          sx={{ label: { fontSize: '1.2rem' } }}
          id="passwordConfirm"
          name="passwordConfirm"
          label="PasswordConfirm"
          type="password"
          fullWidth
          error={!!errors.passwordConfirm}
        />
        <ErrorMessage>{errors.passwordConfirm}</ErrorMessage>
      </InputContainer>
      <SubmitButton
        type="submit"
        variant="outlined"
        name="submit"
        disabled={
          typeof errors.email === 'string' ||
          typeof errors.password === 'string' ||
          typeof errors.passwordConfirm === 'string'
        }
        disableElevation
      >
        가입하기
      </SubmitButton>
    </form>
  );
}

export default SignupForm;

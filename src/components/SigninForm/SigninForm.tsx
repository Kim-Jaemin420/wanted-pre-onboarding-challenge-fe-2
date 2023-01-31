import { css } from '@emotion/react';
import { TextField } from '@mui/material';
import { AuthError } from '@/types';
import { InputContainer, SubmitButton, ErrorMessage } from './signinFormStyle';

interface Props {
  handleChangeForm: React.FormEventHandler<HTMLFormElement>;
  handleSubmitForm: React.FormEventHandler<HTMLFormElement>;
  errors: AuthError;
}

function SigninForm({ handleChangeForm, handleSubmitForm, errors }: Props) {
  return (
    <form
      css={css`
        width: 600px;
      `}
      onChange={handleChangeForm}
      onSubmit={handleSubmitForm}
    >
      <legend
        css={css`
          margin-bottom: 2rem;
          text-align: center;
        `}
      >
        로그인 하기
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
      <SubmitButton
        type="submit"
        variant="outlined"
        disabled={typeof errors.email === 'string' || typeof errors.password === 'string'}
      >
        로그인
      </SubmitButton>
    </form>
  );
}

export default SigninForm;

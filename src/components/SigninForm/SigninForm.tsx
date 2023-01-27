import { css } from '@emotion/react';
import { TextField } from '@mui/material';
import { InputContainer, SubmitButton } from './signinFormStyle';

interface Props {
  handleChangeForm: React.FormEventHandler<HTMLFormElement>;
  handleSubmitForm: React.FormEventHandler<HTMLFormElement>;
}

function SigninForm({ handleChangeForm, handleSubmitForm }: Props) {
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
          font-size: 18px;
          margin-bottom: 20px;
          text-align: center;
        `}
      >
        로그인 하기
      </legend>
      <InputContainer>
        <TextField
          required
          variant="outlined"
          id="email"
          name="email"
          label="email"
          placeholder="email"
          fullWidth
        />
      </InputContainer>
      <InputContainer>
        <TextField
          required
          variant="outlined"
          id="password"
          name="password"
          label="Password"
          type="password"
          fullWidth
        />
      </InputContainer>
      <SubmitButton type="submit" variant="outlined">
        로그인
      </SubmitButton>
    </form>
  );
}

export default SigninForm;

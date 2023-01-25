import { TextField } from '@mui/material';
import { InputContainer, SubmitButton } from './signinFormStyle';

interface Props {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

function SigninForm({ handleSubmit }: Props) {
  return (
    <form onSubmit={handleSubmit}>
      <legend>로그인 하기</legend>
      <InputContainer>
        <TextField
          required
          variant="outlined"
          id="email"
          name="emailField"
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
          name="passwordField"
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

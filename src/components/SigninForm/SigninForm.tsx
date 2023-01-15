import { css } from '@emotion/react';
import { a11yHidden } from '@/styles';
import { IdField, PasswordField, SubmitButton } from './signinFormStyle';

interface Props {}

function SigninForm(props: Props) {
  const {} = props;

  return (
    <form>
      <legend css={a11yHidden}>가입하기</legend>
      <IdField
        required
        variant="outlined"
        id="email"
        label="Required"
        placeholder="email"
      />
      <PasswordField
        required
        variant="outlined"
        id="password"
        name="password"
        label="Password"
        type="password"
      />
      <SubmitButton variant="outlined">로그인</SubmitButton>
    </form>
  );
}

export default SigninForm;

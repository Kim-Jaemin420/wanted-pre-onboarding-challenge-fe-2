import { css } from '@emotion/react';
import { SigninForm } from '@/components';
import { useForm, usePostLogin } from '@/hooks';

function Signin() {
  const postLogin = usePostLogin();

  const { errors, handleChangeForm, handleSubmitForm } = useForm({
    initialFormValues: { email: '', password: '' },
    submittingFunction: postLogin.mutate,
  });

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
      <SigninForm
        handleChangeForm={handleChangeForm}
        handleSubmitForm={handleSubmitForm}
        errors={errors}
      />
    </div>
  );
}

export default Signin;

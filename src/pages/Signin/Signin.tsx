import { useContext } from 'react';
import { css } from '@emotion/react';
import { AuthContext } from '@/context';
import { useAuthForm, usePostLogin } from '@/hooks';
import { Modal, SigninForm } from '@/components';

function Signin() {
  const { setToken } = useContext(AuthContext);
  const postLogin = usePostLogin();

  const { errors, handleChangeForm, handleSubmitForm } = useAuthForm({
    initialFormValues: { email: '', password: '' },
    submittingFunction: postLogin.mutate,
  });

  const handleClickCloseModal = () => {
    if (postLogin.isSuccess) setToken(postLogin.data.token);
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
      <SigninForm
        handleChangeForm={handleChangeForm}
        handleSubmitForm={handleSubmitForm}
        errors={errors}
      />
      <Modal handleClickCloseModal={handleClickCloseModal} />
    </div>
  );
}

export default Signin;

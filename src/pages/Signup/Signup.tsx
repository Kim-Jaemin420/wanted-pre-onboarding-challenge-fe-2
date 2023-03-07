import { useContext } from 'react';
import { css } from '@emotion/react';
import { AuthContext } from '@/context';
import { useAuthForm, usePostSignup } from '@/hooks';
import { Modal, SignupForm } from '@/components';

function Signup() {
  const { setToken } = useContext(AuthContext);
  const postSignup = usePostSignup();

  const { errors, handleChangeForm, handleSubmitForm } = useAuthForm({
    initialFormValues: { email: '', password: '', passwordConfirm: '' },
    submittingFunction: postSignup.mutate,
  });

  const handleClickCloseModal = () => {
    if (postSignup.isSuccess) setToken(postSignup.data.token);
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
        errors={errors}
      />
      <Modal handleClickCloseModal={handleClickCloseModal} />
    </div>
  );
}

export default Signup;

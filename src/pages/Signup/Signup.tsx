import { css } from '@emotion/react';
import { useForm, usePostSignup } from '@/hooks';
import { SignupForm } from '@/components';

function Signup() {
  const postSignup = usePostSignup();

  const { errors, handleChangeForm, handleSubmitForm } = useForm({
    initialFormValues: { email: '', password: '', passwordConfirm: '' },
    submittingFunction: postSignup.mutate,
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
      <SignupForm
        handleSubmitForm={handleSubmitForm}
        handleChangeForm={handleChangeForm}
        errors={errors}
      />
    </div>
  );
}

export default Signup;

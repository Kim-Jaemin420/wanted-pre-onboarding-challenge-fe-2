import { useContext } from 'react';
import { AxiosError } from 'axios';
import { css } from '@emotion/react';
import { AuthContext } from '@/context';
import { signup } from '@/apis';
import { useForm } from '@/hooks';
import { HTTP_ERRORS } from '@/consts';
import { SignupForm } from '@/components';

function Signup() {
  const { setToken } = useContext(AuthContext);

  const register = async () => {
    try {
      const {
        data: { message, token },
      } = await signup(formInputValues);

      setToken(token);

      alert(message);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === HTTP_ERRORS.CONFLICT) {
          alert(error.response.data.details);
        }

        console.error(error);
      }
    }
  };

  const { formInputValues, errors, handleChangeForm, handleSubmitForm } = useForm({
    initialFormValues: { email: '', password: '', passwordConfirm: '' },
    submittingFunction: register,
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

import { useContext } from 'react';
import { AxiosError } from 'axios';
import { css } from '@emotion/react';
import { AuthContext } from '@/context';
import { SigninForm } from '@/components';
import { useForm } from '@/hooks';
import { signin } from '@/apis';
import { HTTP_ERRORS } from '@/consts';

function Signin() {
  const { setToken } = useContext(AuthContext);

  const login = async () => {
    try {
      const {
        data: { message, token },
      } = await signin(formInputValues);

      setToken(token);

      alert(message);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === HTTP_ERRORS.BAD_REQUEST) {
          alert(error.response.data.details);
        }

        console.error(error);
      }
    }
  };

  const { formInputValues, errors, handleChangeForm, handleSubmitForm } = useForm({
    initialFormValues: { email: '', password: '' },
    submittingFunction: login,
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

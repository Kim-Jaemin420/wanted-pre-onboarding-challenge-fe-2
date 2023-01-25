import { SigninForm } from '@/components/index';

function Signin() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { emailField, passwordField } = event.currentTarget;
    console.log(emailField.value, passwordField.value);
  };

  return <SigninForm handleSubmit={handleSubmit} />;
}

export default Signin;

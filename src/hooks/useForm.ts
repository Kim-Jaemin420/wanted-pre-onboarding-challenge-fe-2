import React, { useEffect, useState } from 'react';
import { AuthError, AuthField } from '@/types';
import { validateForm } from '@/utils';

interface Props {
  initialFormValues: AuthField;
  submittingFunction: () => Promise<void>;
}

function useForm({ initialFormValues, submittingFunction }: Props) {
  const [formInputValues, setFormInputValues] = useState(initialFormValues);
  const [errors, setErrors] = useState<AuthError>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submittingFunction();
    }

    return () => {
      setIsSubmitting(false);
    };
  }, [errors]);

  const handleChangeForm = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;

    setFormInputValues((previousValues) => ({ ...previousValues, [target.name]: target.value }));
    setErrors(validateForm(formInputValues));
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setErrors(validateForm(formInputValues));
  };

  return { formInputValues, errors, handleChangeForm, handleSubmitForm };
}

export default useForm;

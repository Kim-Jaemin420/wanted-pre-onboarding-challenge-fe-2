import React, { useEffect, useState } from 'react';
import { AuthError, AuthField } from '@/types';
import { validateForm } from '@/utils';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

interface Props {
  initialFormValues: AuthField;
  submittingFunction: UseMutateFunction<AxiosResponse<any, any>, unknown, AuthField, unknown>;
}

function useForm({ initialFormValues, submittingFunction }: Props) {
  const [formInputValues, setFormInputValues] = useState(initialFormValues);
  const [errors, setErrors] = useState<AuthError>(initialFormValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submittingFunction(formInputValues);
    }

    return () => {
      setIsSubmitting(false);
    };
  }, [errors]);

  const handleChangeForm = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;

    setFormInputValues((previousValues) => ({ ...previousValues, [target.name]: target.value }));

    setErrors(
      validateForm({ ...formInputValues, [target.name]: target.value }, errors, target.name)
    );
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setErrors(validateForm(formInputValues, errors));
  };

  return { formInputValues, errors, handleChangeForm, handleSubmitForm };
}

export default useForm;

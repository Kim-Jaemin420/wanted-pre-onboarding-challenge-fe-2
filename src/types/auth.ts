export interface SignupFieldError {
  emailErrorMessage?: string | null;
  passwordErrorMessage?: string | null;
  passwordConfirmErrorMessage?: string | null;
}

export interface AuthField {
  email: string;
  password: string;
  passwordConfirm?: string;
}

export interface AuthError {
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

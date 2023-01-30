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

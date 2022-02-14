export interface IRegisterUser {
  username: string;
  email: string;
  password: string;
  password_verification: string;
  givenName: string;
  familyName: string;
}

export interface ILoginUser {
  username: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  email: string;
  token: string;
  password: string;
  password_verification: string;
}

export interface SignupRequestBody {
  email: string;
  username: string;
  password: string;
}

export interface SigninRequestBody {
  email?: string;
  username?: string;
  password: string;
}

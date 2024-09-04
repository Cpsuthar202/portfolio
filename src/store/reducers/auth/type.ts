export interface ILoginSchema {
  email: string;
  password: string;
}
export interface ILoginSchemaErr {
  full_name?: string;
  email?: string;
  password?: string;
}
export interface IRegistrationSchema {
  email: string;
  full_name: string;
  password: string;
}

export interface ILoginResponse {
  user?: IUser;
  token: string;
}

interface IUser {
  email: string;
  password: string;
  full_name?: string;
}

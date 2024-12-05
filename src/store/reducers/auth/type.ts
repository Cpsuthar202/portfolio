export interface ILoginSchema {
  email: string;
  password: string;
  phone_number: string;
}
export interface ILoginSchemaErr {
  full_name?: string;
  phone_number?: string;
  password?: string;
}
export interface IRegistrationSchema {
  full_name: string;
  phone_number: string;
  password: string;
}

export interface ILoginResponse {
  user?: IUser;
  token: string;
}

interface IUser {
  password: string;
  phone_number: string;
  full_name?: string;
}

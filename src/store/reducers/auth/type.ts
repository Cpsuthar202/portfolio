export interface IAuthSliceInitialState {
  isLoading: boolean;
  data: ILoginResponse | null;
  isError: boolean;
  isLoadingUser: boolean;
  loginDetailPreserve: ILoginSchema | null;
  registerDetailPreserve: IRegistrationSchema | null;
}
export interface ILoginSchema {
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

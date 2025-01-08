import { IAddress } from "../address/type";

export interface IAuthSliceInitialState {
  isLoading: boolean;
  data: IauthResponse | null;
  isError: boolean;
  isLoadingUser: boolean;
  loginDetailPreserve: ILoginSchema | null;
  registerDetailPreserve: IRegistrationSchema | null;
}

export interface ILoginSchema {
  password: string;
  email: string;
}

export interface ILoginSchemaErr {
  name?: string;
  email?: string;
  password?: string;
  otp?: string;
}

export interface IRegistrationSchema {
  name: string;
  email: string;
  password: string;
  otp?: string;
}

export interface IauthResponse {
  user: IUser;
  token: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  // password: string;
  bod?: string;
  gender?: string;
  phone_number?: string;
  admin?: boolean;
  address?: IAddress;
  created_at: string;
  updated_at: string;
}

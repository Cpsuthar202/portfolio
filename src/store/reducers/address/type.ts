export interface IAddressSliceInitialState {
  isLoading: boolean;
  data: null | undefined;
  addresses: IAddress[] | null | undefined;
  isError: boolean;
  isLoadingUser: boolean;
}

export interface IAddress {
  id?: string;
  name: string;
  mobile_no: string;
  pincode: string;
  landmark?: string;
  city: string;
  state: string;
  country: string;
  line_1: string;
  line_2?: string;
  default: boolean;
  userId: string;
  created_at: string;
  updated_at: string;
}

export type IAddressErr = Partial<Record<keyof IAddress, string>>;

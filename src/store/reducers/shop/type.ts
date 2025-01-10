import { IAddress } from "../address/type";

export interface IShopsSliceInitialState {
  isLoading: boolean;
  data: null | undefined;
  shops: IShopsResponse[] | null | undefined;
  shop: IShopsResponse | null | undefined;
  isError: boolean;
  isLoadingUser: boolean;
}

export interface IShopsResponse {
  id: string;
  userId: string;
  logo?: string;
  banner_image?: string;
  shop_image: string;
  owner_image?: string;
  shop_name: string;
  owner_name: string;
  address: IAddress;
  contact: IContact;
  description?: string;
  socialMedia?: ISocialMedia;
  created_at: string;
  updated_at: string;
}
export interface IContact {
  email?: string;
  phone_number: string;
}

export interface ISocialMedia {
  facebook: string;
  twitter: string;
  instagram: string;
}
export interface IShopPayload {
  id?: string;
}

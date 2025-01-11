import { IAddress } from "../address/type";
export interface IOrderSliceInitialState {
  isLoading: boolean;
  data: null | undefined;
  orders: IOrdersResponse[] | null | undefined;
  isError: boolean;
  isLoadingUser: boolean;
}

export interface IOrdersResponse {
  product_id: string;
  quantity: number;
  color: string;
  size: string;
  user_id: string;
  shop_id: string;
  id: string;
  payment_method: string;
  order_date: string;
  price?: number;
  delivery_charges?: number;
  totel?: number;
  product?: Product;
  address: IAddress;
  tracking_link?: string;
  track_id: string;
  rating?: number;
}

export interface Product {
  title: string;
  id: string;
  image: string;
}
export interface IOrderPayload {
  address_id: string;
  payment_method: string;
}

export interface ICartsSliceInitialState {
  isLoading: boolean;
  data: null | undefined;
  carts: ICartsResponse | null | undefined;
  isError: boolean;
  isLoadingUser: boolean;
}

export interface ICartsResponse {
  payment_details: Ipayment_details;
  list: Icart[];
}

export interface Icart {
  id: string;
  product_id?: string;
  quantity: number;
  color?: string;
  size?: string;
  user_id: string;
  shop_id: string;
  product?: ICartProduct;
}

export interface Ipayment_details {
  products: number;
  quantity: number;
  price: number;
  discount_price: number;
  save_price: number;
  delivery_charges: number;
  totel: number;
}

export interface ICartProduct {
  title: string;
  price: number;
  discount_price: number;
  delivery_charges: number;
  id: string;
  image: string;
  stock: number;
}

export interface IcartPayload {
  product_id: string;
  quantity: number;
  color?: string;
  size?: string;
  product?: ICartProduct;
}

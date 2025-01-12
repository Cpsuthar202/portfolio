import { Iproduct } from "../product/type";

export interface IWishsSliceInitialState {
  isLoading: boolean;
  data: null | undefined;
  wishs: IWishsResponse[] | null | undefined;
  isError: boolean;
  isLoadingUser: boolean;
}
export interface IWishsResponse {
  id: string;
  product_id: string;
  user_id: string;
  product: Iproduct;
}

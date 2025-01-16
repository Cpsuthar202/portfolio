import { IBrandsResponse } from "../brand/type";
import { ICategoriesResponse } from "../category/type";
import { Iproduct } from "../product/type";
import { IShopsResponse } from "../shop/type";

export interface IDashboardsSliceInitialState {
  isLoading: boolean;
  data: null | undefined;
  dashboards: IDashboardsResponse | null | undefined;
  isError: boolean;
  isLoadingUser: boolean;
}

export interface IDashboardsResponse {
  categories: ICategoriesResponse[];
  brands: IBrandsResponse[];
  shops: IShopsResponse[];
  products: Iproduct[];
}

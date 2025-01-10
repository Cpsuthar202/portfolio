export interface IBrandsSliceInitialState {
  isLoading: boolean;
  data: null | undefined;
  brands: IBrandsResponse[] | null | undefined;
  isError: boolean;
  isLoadingUser: boolean;
}

export interface IBrandsResponse {
  id: string;
  sort: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
}

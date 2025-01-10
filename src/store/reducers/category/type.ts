export interface ICategoriesSliceInitialState {
  isLoading: boolean;
  data: null | undefined;
  categories: ICategoriesResponse[] | null | undefined;
  isError: boolean;
  isLoadingUser: boolean;
}

export interface ICategoriesResponse {
  id: string;
  sort: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
}

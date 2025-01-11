import { IPagination } from "@/store/type";

export interface IProductsSliceInitialState {
  isLoading: boolean;
  data: null | undefined;
  products: IPagination<Iproduct[]> | null | undefined;
  product: Iproduct | null | undefined;
  isError: boolean;
  isLoadingUser: boolean;
}
export interface Iproduct {
  id: string;
  user_id: string;
  discount_price: number;
  title: string;
  description: string;
  price: number;
  discount_percentage: number;
  colors?: string[];
  sizes?: string[];
  brand_id: string;
  category_id: string;
  shop_id: string;
  images: string[];
  teg: string[];
  features: string[];
  hero_images: string[];
  replacement: string;
  delivery_charges: number;
  warranty?: string;
  best_selling: boolean;
  best_selling_number: number;
  stock: number;
  product_type: string;
  ratings: Ratings;
}

export interface Ratings {
  rat: number;
  total_raters: number;
  rat_5: number;
  rat_4: number;
  rat_3: number;
  rat_2: number;
  rat_1: number;
}

export interface IproductPayload {
  limit?: number;
  page?: number;
  searchTerm?: string;
  shopId?: string;
  brandId?: string;
  categoryId?: string;
}

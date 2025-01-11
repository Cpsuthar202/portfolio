export interface IAPIResponseSchema<T> {
  code: number;
  message: string;
  data?: T;
}

export interface IPagination<T> {
  meta: IMeta;
  list: T;
}

export interface IMeta {
  page_size: number;
  total: number;
  current_page: number;
  last_page: number;
  total_pages: number;
}

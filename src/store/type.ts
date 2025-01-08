interface IAPIResponseSchema<T> {
  code: number;
  message: string;
  data?: T;
}
export type { IAPIResponseSchema };

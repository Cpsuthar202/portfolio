export interface IAddress {
  id?: string;
  name: string;
  mobile_no: string;
  pincode: string;
  landmark?: string;
  city: string;
  state: string;
  country: string;
  line_1: string;
  line_2?: string;
  default: boolean;
  userId: string;
}

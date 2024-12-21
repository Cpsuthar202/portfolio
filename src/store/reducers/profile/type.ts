export interface Iupdateprofile {
  profile_url: string;
  name: string;
  email: string;
  phone_number: string;
  gender: string;
  dob: string;
}

export type IupdateprofileErr = Partial<Record<keyof Iupdateprofile, string>>;

export interface PasswordData {
  phone_number: string;
  old_password: string;
  new_password: string;
}

export type PasswordErrors = Partial<Record<keyof PasswordData, string>>;

export interface Iaddress {
  id?: string; // Added ID property
  name?: string;
  mobile_no?: string;
  pincode: string;
  landmark: string;
  city: string;
  state: string;
  country: string;
  area: string;
  apartment: string;
  default?: boolean; // Indicates if the address is the default
}
export interface IaddressErr {
  name?: string;
  mobile_no?: string;
  pincode?: string;
  landmark?: string;
  city?: string;
  state?: string;
  country?: string;
  area?: string;
  apartment?: string;
  default?: boolean; // Indicates if the address is the default
}

export interface Iprofile {
  user_id: string;
  profile_url?: string;
  name: string;
  email: string;
  phone_number: string;
  gender: string;
  dob: string;
  password: string;
  address: Iaddress[];
}

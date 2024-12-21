export interface IstoresData {
  id: string;
  logo?: string;
  banner_image?: string;
  image: string;
  owner_photo?: string;
  store_name: string;
  ownerName: string;
  address: {
    pincode: string;
    landmark: string;
    city: string;
    state: string;
    country: string;
    area: string;
    apartment: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  description: string;
  storeHours?: Record<string, string>;
  socialMedia?: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  rating?: number;
}

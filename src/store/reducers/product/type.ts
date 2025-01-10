export interface Iproduct {
  id: string;
  title: string;
  price: number;
  mrp: number;
  discountPrice: number;
  discountPercentage: number;
  description: string;
  ratings: Rating;
  colors?: Icolor[];
  sizes?: string[];
  brands: any;
  categories: any;
  store: store;
  images: string[];
  hero_images?: string[];
  teg: string[];
  features: string[];
  replacementPolicy: string;
  bestSelling: boolean;
  bestSelling_number?: number;
  delivery_charges: number;
  warranty: number;
  numberOfOrders: number;
  availability: boolean;
  stock: number;
}

export interface Icolor {
  label: string;
  code: string;
  image?: string;
}

interface store {
  store_name: string;
  id: string;
  logo: string;
}
interface Rating {
  rat: number;
  totalRaters: number;
  rat_5: number;
  rat_4: number;
  rat_3: number;
  rat_2: number;
  rat_1: number;
}

import { Iaddress } from "@/store/reducers/profile/type";

interface ICartData {
  payment_details: {
    price: number;
    discountPrice: number;
    delivery_charges: number;
    total_amount: number;
    save_amount: number;
    items: number;
    quantity: number;
  };
  address: Iaddress;
  cartList: CartItem[];
}

interface CartItem {
  product_id: string;
  image: string;
  attributes: {
    size?: string;
    color?: {
      label: string;
      code: string;
      image: string;
    };
  };
  id: string;
  title: string;
  price: number;
  discountPrice: number;
  mrp: number;
  discountPercentage: number;
  delivery_charges: number;
  warranty: number; // Warranty period in years
  stock: number;
  quantity: number;
}

export const cartData: ICartData = {
  payment_details: {
    price: 1220,
    discountPrice: 950,
    delivery_charges: 13,
    total_amount: 963,
    save_amount: 260,
    items: 3,
    quantity: 4,
  },
  address: {
    id: "addr001",
    name: "Chandra Prakash Suthar S/O Bharat Kumar",
    mobile_no: "7023667323",
    pincode: "306912",
    landmark: "Shandev Mandir",
    city: "Pali",
    state: "Rajasthan",
    country: "India",
    area: "Takhatgarh",
    apartment: "Hanuman Ji Gali",
    default: true, // Default address
  },
  cartList: [
    {
      product_id: "p67890",
      image: "https://example.com/images/shoes.jpg",
      attributes: {
        size: "standard",
        color: {
          label: "Thunder Blue",
          code: "#4E5D73",
          image: "https://m.media-amazon.com/images/I/71XWviFA49L._SX522_.jpg",
        },
      },
      id: "p1",
      title: "boAt bosco Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime, Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls (Bold Black)",
      price: 200,
      discountPrice: 100,
      mrp: 200,
      discountPercentage: 50,
      delivery_charges: 5,
      warranty: 1,
      stock: 4,
      quantity: 1,
    },
    {
      product_id: "p12345",
      image: "https://example.com/images/laptop.jpg",
      attributes: {
        size: "15.6 inch",
        color: {
          label: "Silver",
          code: "#C0C0C0",
          image: "https://m.media-amazon.com/images/I/61q6x-llAHL._SX522_.jpg",
        },
      },
      id: "p2",
      title: "Dell Inspiron 15 Laptop - 12th Gen Intel Core i5, 8GB RAM, 512GB SSD, Windows 11 Home, Full HD Display",
      price: 750,
      discountPrice: 700,
      mrp: 800,
      discountPercentage: 12,
      delivery_charges: 0,
      warranty: 2,
      stock: 3,
      quantity: 1,
    },
    {
      product_id: "p54321",
      image: "https://example.com/images/watch.jpg",
      attributes: {
        size: "One Size",
        color: {
          label: "Black",
          code: "#000000",
          image: "https://m.media-amazon.com/images/I/81s6DUyQCZL._SX522_.jpg",
        },
      },
      id: "p3",
      title: "Amazfit Bip U Smartwatch with SpO2, Stress Monitoring, 9-Day Battery Life, 1.43” HD Color Display (Black)",
      price: 60,
      discountPrice: 50,
      mrp: 60,
      discountPercentage: 17,
      delivery_charges: 3,
      warranty: 1,
      stock: 10,
      quantity: 2,
    },
  ],
};

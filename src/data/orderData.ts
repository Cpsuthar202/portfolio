import { Iaddress } from "@/store/reducers/profile/type";

interface OrderItem {
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
  quantity: number;
  address: Iaddress;
  delivered_on?: string;
  order_date?: string;
  tracking_details: {
    tracking_id: string;
    tracking_link: string;
  };
  rating?: number;
}

export const orderData: OrderItem[] = [
  {
    product_id: "p67890",
    image: "https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg",
    attributes: {
      size: "standard",
    },
    id: "o12345678",
    title: "boAt bosco Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime, Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls (Bold Black)",
    price: 200,
    discountPrice: 100,
    mrp: 200,
    discountPercentage: 50,
    delivery_charges: 5,
    warranty: 1,
    tracking_details: {
      tracking_id: "7623fhg747",
      tracking_link: "https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx",
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
    quantity: 2,
    delivered_on: "16 November 2023",
    order_date: "1 november 2023",
    rating: 2.5,
  },
  {
    product_id: "p12345",
    image: "https://m.media-amazon.com/images/I/61AJz8OulOL._SL1500_.jpg",
    attributes: {
      size: "15.6 inch",
      color: {
        label: "Silver",
        code: "#C0C0C0",
        image: "https://m.media-amazon.com/images/I/61RLJLac9iL._SL1500_.jpg",
      },
    },
    id: "o248",
    title: "Dell Inspiron 15 Laptop - 12th Gen Intel Core i5, 8GB RAM, 512GB SSD, Windows 11 Home, Full HD Display",
    price: 750,
    discountPrice: 700,
    mrp: 800,
    discountPercentage: 12,
    delivery_charges: 14,
    warranty: 2,
    address: {
      id: "addr002",
      name: "John Doe",
      mobile_no: "9876543210",
      pincode: "110011",
      landmark: "Near Central Park",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      area: "Connaught Place",
      apartment: "The Grand Residency",
      default: false,
    },
    quantity: 6,
    tracking_details: {
      tracking_id: "22227623fhg747",
      tracking_link: "https://www.ecomexpress.in/tracking",
    },
    // delivered_on: "16 November 2024",
    order_date: "16 November 2024",
  },
  {
    product_id: "p54321",
    image: "https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg",
    attributes: {
      size: "standard",
      color: { label: "Olive Green", code: "#808044", image: "https://m.media-amazon.com/images/I/71i6-yYY1IL._SX522_.jpg" },
    },
    id: "o345",
    title: "boAt bosco Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
    price: 60,
    discountPrice: 50,
    mrp: 60,
    discountPercentage: 17,
    delivery_charges: 3,
    warranty: 1,
    address: {
      id: "addr004",
      name: "Rahul Sharma ",
      mobile_no: "9123456789",
      pincode: "400001",
      landmark: "Opp. Gateway of India",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      area: "Colaba",
      apartment: "Seaside View",
      default: false,
    },
    quantity: 2,
    delivered_on: "16 November 2024",
    order_date: "1 November 2024",
    tracking_details: {
      tracking_id: "7623fhg747",
      tracking_link: "https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx",
    },
    rating: 4.5,
  },
];

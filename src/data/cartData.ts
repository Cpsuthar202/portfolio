import { Ibrands } from "./brands";
import { Icategories } from "./categories";

export interface Iproduct {
  id: string;
  title: string;
  price: number;
  mrp: number;
  discountPrice: number;
  discountPercentage: number;
  description?: string;
  ratings?: Rating;
  colors?: Color[];
  sizes?: string[];
  brands?: Ibrands;
  categories?: Icategories;
  store?: store;
  images: string[];
  hero_images?: string[];
  teg?: string[];
  features?: string[];
  replacementPolicy?: string;
  bestSelling?: boolean;
  bestSelling_number?: number;
  delivery_charges: number;
  warranty?: number;
  numberOfOrders?: number;
  availability: boolean;
  stock: number;
  quantity: number;
}

interface Color {
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
export const cartData: Iproduct[] = [
  {
    id: "p1",
    title: "boAt bosco Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
    // description: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
    price: 200,
    discountPrice: 100,
    mrp: 200,
    discountPercentage: 50,
    // ratings: {
    //   rat: 3.5,
    //   totalRaters: 245,
    //   rat_5: 35,
    //   rat_4: 30,
    //   rat_3: 80,
    //   rat_2: 70,
    //   rat_1: 4,
    // },
    colors: [
      { label: "Black", code: "#000000", image: "https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg" },
      { label: "Cider Cyan", code: "#00FFFF", image: "https://m.media-amazon.com/images/I/71oXzCK43NL._SX522_.jpgg" },
      { label: "Olive Green", code: "#808000", image: "https://m.media-amazon.com/images/I/71i6-yYY1IL._SX522_.jpg" },
      { label: "Pure White", code: " #FFFFFF", image: "https://m.media-amazon.com/images/I/61+62pfcajL._SX522_.jpg" },
      { label: " Thunder Blue", code: "#4E5D73", image: "https://m.media-amazon.com/images/I/71XWviFA49L._SX522_.jpg" },
    ],
    sizes: ["standard"],
    // brands: { id: "b1", label: "Boat", logo: "https://swarajya.gumlet.io/swarajya/2021-01/7a6e91f6-5862-4ac5-bb08-eb5bf2a3e20c/boAt_logo.jpg?w=610&q=50&compress=true&format=auto" },
    // categories: { id: "c1", label: "Earbuds", image: "https://m.media-amazon.com/images/I/614hH1Cot3L.jpg" },
    // store: {
    //   id: "1",
    //   logo: "https://media.gettyimages.com/id/1438530724/photo/facade-of-a-food-store-or-charcuterie.jpg?s=612x612&w=gi&k=20&c=KNUptosEYqC0qRHoO9nmliaO465VHqSMEOIBfbGJ6Es=",
    //   store_name: "Tech Haven",
    // },
    images: [
      "https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61mEqp7RZXL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71QZbcvD65L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61vBE3t4x1L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61F5lcvJHLL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61rM6cHlA1L._SX522_.jpg",
    ],
    // teg: ["bosco", "phone"],
    // features: [
    //   "Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.",
    //   "Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience. These tws earbuds are your companion for a perfect gaming experience",
    //   "Clear Voice Calls- It dons built-in mic on each earbud along with our ENx Environmental Noise Cancellation tech that ensures a smooth delivery_charges of your voice via voice call",
    //   "TboAt Signature Sound- Delve into your cherished boAt Immersive auditory time with Airdopes 141",
    //   "ASAP Charge- The tws earbuds are equipped with our ASAP Charge feature that offers up to 75 min of playtime in just 5 min of charge; while the carry case comes along with the Type C interfacert",
    // ],
    // hero_images: [
    //   "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3727d7a1-07ed-459b-b533-4eccd307d573.__CR0,0,650,350_PT0_SX650_V1___.png",
    //   "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3727d7a1-07ed-459b-b533-4eccd307d573.__CR0,0,650,350_PT0_SX650_V1___.png",
    //   "https://m.media-amazon.com/images/S/aplus-media-library-service-media/dad939a4-9514-445d-8f23-b136a6c43bd0.__CR0,0,1464,600_PT0_SX1464_V1___.png",
    //   "https://m.media-amazon.com/images/S/aplus-media-library-service-media/e7e6ff86-668d-498a-a85d-04e37d0a0862.__CR0,0,1464,600_PT0_SX1464_V1___.png",
    //   "https://m.media-amazon.com/images/S/aplus-media-library-service-media/505b9599-75c2-48ac-8590-23482cb2475d.__CR0,0,1464,600_PT0_SX1464_V1___.png",
    // ],
    // replacementPolicy: "7 days replacement policy",
    delivery_charges: 5,
    warranty: 1,
    bestSelling: true,
    bestSelling_number: 4,
    numberOfOrders: 1500,
    availability: true,
    stock: 4,
    quantity: 1,
  },

  {
    id: "p3",
    title: "boAt bosco Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
    description: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
    price: 300,
    discountPrice: 200,
    mrp: 300,
    discountPercentage: 25,
    ratings: {
      rat: 4.5,
      totalRaters: 2345,
      rat_5: 350,
      rat_4: 230,
      rat_3: 180,
      rat_2: 70,
      rat_1: 40,
    },
    colors: [
      { label: "Black", code: "#000000", image: "https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg" },
      { label: "Cider Cyan", code: "#00FFFF", image: "https://m.media-amazon.com/images/I/71oXzCK43NL._SX522_.jpgg" },
      { label: "Olive Green", code: "#808000", image: "https://m.media-amazon.com/images/I/71i6-yYY1IL._SX522_.jpg" },
      { label: "Pure White", code: " #FFFFFF", image: "https://m.media-amazon.com/images/I/61+62pfcajL._SX522_.jpg" },
      { label: " Thunder Blue", code: "#4E5D73", image: "https://m.media-amazon.com/images/I/71XWviFA49L._SX522_.jpg" },
    ],
    sizes: ["standard"],
    brands: { id: "b1", label: "Boat", logo: "https://swarajya.gumlet.io/swarajya/2021-01/7a6e91f6-5862-4ac5-bb08-eb5bf2a3e20c/boAt_logo.jpg?w=610&q=50&compress=true&format=auto" },
    categories: { id: "c1", label: "Earbuds", image: "https://m.media-amazon.com/images/I/614hH1Cot3L.jpg" },
    store: {
      id: "1",
      logo: "https://media.gettyimages.com/id/1438530724/photo/facade-of-a-food-store-or-charcuterie.jpg?s=612x612&w=gi&k=20&c=KNUptosEYqC0qRHoO9nmliaO465VHqSMEOIBfbGJ6Es=",
      store_name: "Tech Haven",
    },
    images: [
      "https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61mEqp7RZXL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71QZbcvD65L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61vBE3t4x1L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61F5lcvJHLL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61rM6cHlA1L._SX522_.jpg",
    ],
    teg: ["bosco", "phone"],
    features: [
      "Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.",
      "Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience. These tws earbuds are your companion for a perfect gaming experience",
      "Clear Voice Calls- It dons built-in mic on each earbud along with our ENx Environmental Noise Cancellation tech that ensures a smooth delivery_charges of your voice via voice call",
      "TboAt Signature Sound- Delve into your cherished boAt Immersive auditory time with Airdopes 141",
      "ASAP Charge- The tws earbuds are equipped with our ASAP Charge feature that offers up to 75 min of playtime in just 5 min of charge; while the carry case comes along with the Type C interfacert",
    ],
    replacementPolicy: "7 days replacement policy",
    delivery_charges: 1,
    warranty: 1,
    bestSelling: true,
    bestSelling_number: 2,
    numberOfOrders: 1500,
    availability: true,
    stock: 0,
    quantity: 2,
  },

  {
    id: "p6",
    title: "boAt bosco Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
    description: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
    price: 50,
    discountPrice: 20,
    mrp: 20,
    discountPercentage: 30,
    ratings: {
      rat: 4.5,
      totalRaters: 2345,
      rat_5: 350,
      rat_4: 230,
      rat_3: 180,
      rat_2: 70,
      rat_1: 40,
    },
    colors: [
      { label: "Black", code: "#000000", image: "https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg" },
      { label: "Cider Cyan", code: "#00FFFF", image: "https://m.media-amazon.com/images/I/71oXzCK43NL._SX522_.jpgg" },
      { label: "Olive Green", code: "#808000", image: "https://m.media-amazon.com/images/I/71i6-yYY1IL._SX522_.jpg" },
      { label: "Pure White", code: " #FFFFFF", image: "https://m.media-amazon.com/images/I/61+62pfcajL._SX522_.jpg" },
      { label: " Thunder Blue", code: "#4E5D73", image: "https://m.media-amazon.com/images/I/71XWviFA49L._SX522_.jpg" },
    ],
    sizes: ["standard"],
    brands: { id: "b1", label: "Boat", logo: "https://swarajya.gumlet.io/swarajya/2021-01/7a6e91f6-5862-4ac5-bb08-eb5bf2a3e20c/boAt_logo.jpg?w=610&q=50&compress=true&format=auto" },
    categories: { id: "c1", label: "Earbuds", image: "https://m.media-amazon.com/images/I/614hH1Cot3L.jpg" },
    store: {
      id: "1",
      logo: "https://media.gettyimages.com/id/1438530724/photo/facade-of-a-food-store-or-charcuterie.jpg?s=612x612&w=gi&k=20&c=KNUptosEYqC0qRHoO9nmliaO465VHqSMEOIBfbGJ6Es=",
      store_name: "Tech Haven",
    },
    images: [
      "https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61mEqp7RZXL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71QZbcvD65L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61vBE3t4x1L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61F5lcvJHLL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61rM6cHlA1L._SX522_.jpg",
    ],
    teg: ["bosco", "phone"],
    features: [
      "Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.",
      "Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience. These tws earbuds are your companion for a perfect gaming experience",
      "Clear Voice Calls- It dons built-in mic on each earbud along with our ENx Environmental Noise Cancellation tech that ensures a smooth delivery_charges of your voice via voice call",
      "TboAt Signature Sound- Delve into your cherished boAt Immersive auditory time with Airdopes 141",
      "ASAP Charge- The tws earbuds are equipped with our ASAP Charge feature that offers up to 75 min of playtime in just 5 min of charge; while the carry case comes along with the Type C interfacert",
    ],
    replacementPolicy: "7 days replacement policy",
    delivery_charges: 10,
    warranty: 1,
    bestSelling: true,
    bestSelling_number: 1,
    numberOfOrders: 1500,
    availability: true,
    stock: 5,
    quantity: 4,
  },
];

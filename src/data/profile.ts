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
  profile_url: string;
  name: string;
  email: string;
  phone_number: string;
  gender: string;
  dob: string;
  password: string;
  address: Iaddress[];
}

export const profilDetails: Iprofile = {
  user_id: "1cps99",
  profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s",
  name: "Chandra Prakash Suthar",
  email: "jane.doe@example.com",
  phone_number: "7023667323",
  gender: "male",
  dob: "1999-02-20",
  // dob: "20-02-1999",
  password: "ACPs1999",
  address: [
    {
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
    {
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
    {
      id: "addr003",
      name: "Jane Doe",
      mobile_no: "9876543211",
      pincode: "560001",
      landmark: "Beside MG Road Metro",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      area: "MG Road",
      apartment: "Prestige Apartment",
      default: false,
    },
    {
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
    {
      id: "addr005",
      name: "Anjali Verma",
      mobile_no: "9812345678",
      pincode: "700001",
      landmark: "Near Howrah Bridge",
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
      area: "Howrah",
      apartment: "Heritage Residency",
      default: false,
    },
  ],
};

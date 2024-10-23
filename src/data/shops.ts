export interface IshopsData {
  id: string;
  logo: string;
  label: string;
  ownerName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  category: string;
  description: string;
}

export const shopsData: IshopsData[] = [
  {
    id: "1",
    logo: "https://media.gettyimages.com/id/1438530724/photo/facade-of-a-food-store-or-charcuterie.jpg?s=612x612&w=gi&k=20&c=KNUptosEYqC0qRHoO9nmliaO465VHqSMEOIBfbGJ6Es=",
    label: "Tech Haven",
    ownerName: "John Doe",
    address: {
      street: "123 Tech Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94107",
      country: "USA",
    },
    contact: {
      email: "contact@techhaven.com",
      phone: "+1-123-456-7890",
    },
    category: "Electronics",
    description: "A one-stop shop for the latest in tech gadgets and electronics.",
  },
  {
    id: "2",
    logo: "https://example.com/images/shop2.jpg",
    label: "Fashion Hub",
    ownerName: "Jane Smith",
    address: {
      street: "456 Fashion Ave",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
    },
    contact: {
      email: "hello@fashionhub.com",
      phone: "+1-987-654-3210",
    },
    category: "Clothing",
    description: "Trendy and stylish clothing for all ages.",
  },
  {
    id: "3",
    logo: "https://example.com/images/shop3.jpg",
    label: "Home & Decor",
    ownerName: "Alice Johnson",
    address: {
      street: "789 Maple Lane",
      city: "Austin",
      state: "TX",
      zipCode: "73301",
      country: "USA",
    },
    contact: {
      email: "support@homedecor.com",
      phone: "+1-512-555-1212",
    },
    category: "Home Goods",
    description: "Beautiful home furnishings and decor items.",
  },
  {
    id: "4",
    logo: "https://media-cdn.tripadvisor.com/media/photo-s/06/17/c7/3f/item-shop.jpg",
    label: "Book Nook",
    ownerName: "Mark Lewis",
    address: {
      street: "321 Book Street",
      city: "Seattle",
      state: "WA",
      zipCode: "98101",
      country: "USA",
    },
    contact: {
      email: "info@booknook.com",
      phone: "+1-206-555-9876",
    },
    category: "Books",
    description: "Your neighborhood bookstore for all genres.",
  },
  {
    id: "5",
    logo: "https://example.com/images/shop5.jpg",
    label: "Gourmet Market",
    ownerName: "Emma Thompson",
    address: {
      street: "88 Culinary Road",
      city: "Portland",
      state: "OR",
      zipCode: "97205",
      country: "USA",
    },
    contact: {
      email: "orders@gourmetmarket.com",
      phone: "+1-503-555-7890",
    },
    category: "Food & Beverages",
    description: "Organic and gourmet food items for healthy living.",
  },
  {
    id: "6",
    logo: "https://example.com/images/shop6.jpg",
    label: "Pet Paradise",
    ownerName: "Daniel Harris",
    address: {
      street: "654 Pet Lane",
      city: "Denver",
      state: "CO",
      zipCode: "80202",
      country: "USA",
    },
    contact: {
      email: "hello@petparadise.com",
      phone: "+1-303-555-1234",
    },
    category: "Pets",
    description: "All the supplies and care products for your pets.",
  },
  {
    id: "7",
    logo: "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/d/AmazonStores/A21TJRUUN4KGV/388cb5fa95916d7fc3ec84b28f33764c.w2260.h889._CR0%2C0%2C2260%2C889_SX200_.png",
    label: "Fitness Zone",
    ownerName: "Laura Carter",
    address: {
      street: "111 Fitness Street",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "USA",
    },
    contact: {
      email: "info@fitnesszone.com",
      phone: "+1-312-555-5678",
    },
    category: "Fitness & Sports",
    description: "Everything you need for fitness and sports activities.",
  },
  {
    id: "8",
    logo: "https://example.com/images/shop8.jpg",
    label: "Kids World",
    ownerName: "Nancy Lee",
    address: {
      street: "234 Fun Street",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "USA",
    },
    contact: {
      email: "support@kidsworld.com",
      phone: "+1-213-555-4321",
    },
    category: "Toys & Kids",
    description: "A wide range of toys and products for children of all ages.",
  },
  {
    id: "9",
    logo: "https://example.com/images/shop9.jpg",
    label: "Outdoor Life",
    ownerName: "Chris Green",
    address: {
      street: "555 Adventure Road",
      city: "Phoenix",
      state: "AZ",
      zipCode: "85001",
      country: "USA",
    },
    contact: {
      email: "contact@outdoorlife.com",
      phone: "+1-602-555-6789",
    },
    category: "Outdoor & Adventure",
    description: "Gear and apparel for outdoor enthusiasts and adventurers.",
  },
  {
    id: "10",
    logo: "https://example.com/images/shop10.jpg",
    label: "Beauty Bliss",
    ownerName: "Sophia Martin",
    address: {
      street: "77 Beauty Blvd",
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      country: "USA",
    },
    contact: {
      email: "info@beautybliss.com",
      phone: "+1-305-555-0987",
    },
    category: "Beauty & Cosmetics",
    description: "Top beauty products and cosmetics from around the world.",
  },
];

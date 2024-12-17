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

export const storesData: IstoresData[] = [
  {
    id: "s1",
    banner_image: "https://rukminim2.flixcart.com/fk-p-flap/1400/232/image/5d2743f3be835a42.jpg?q=60",
    image: "https://c8.alamy.com/comp/ED0HHW/kerala-india-storess-in-mundakayam-ED0HHW.jpg",
    owner_photo: "https://c8.alamy.com/comp/ED0HHW/kerala-india-storess-in-mundakayam-ED0HHW.jpg",
    store_name: "Tech Haven",
    ownerName: "John Doe",
    address: {
      pincode: "306912",
      landmark: "Shandev Mandir",
      city: "Pali",
      state: "Rajasthan",
      country: "India",
      area: "Takhatgarh",
      apartment: "Hanuman Ji Gali",
    },
    contact: {
      email: "contact@techhaven.com",
      phone: "+1-123-456-7890",
    },
    description: "A one-stop store for the latest in tech gadgets and electronics.",
    storeHours: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed",
    },
    socialMedia: {
      facebook: "https://facebook.com/techhaven",
      twitter: "https://twitter.com/techhaven",
      instagram: "https://instagram.com/techhaven",
    },
    rating: 4.5,
  },
  {
    id: "s2",
    logo: "https://img.freepik.com/free-vector/gradient-instagram-stores-logo-template_23-2149704603.jpg",
    banner_image: "https://cdn.vectorstock.com/i/500p/09/80/online-shopping-banner-vector-17230980.jpg",
    image: "https://www.shutterstock.com/image-photo/young-woman-happily-storess-fresh-260nw-2476499265.jpg",
    owner_photo: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    store_name: "Fashion Hub",
    ownerName: "Jane Smith",
    address: {
      pincode: "306912",
      landmark: "Shandev Mandir",
      city: "Pali",
      state: "Rajasthan",
      country: "India",
      area: "Takhatgarh",
      apartment: "Hanuman Ji Gali",
    },
    contact: {
      email: "hello@fashionhub.com",
      phone: "+1-987-654-3210",
    },
    description: "Trendy and stylish clothing for all ages.",
    socialMedia: {
      facebook: "https://facebook.com/techhaven",
      twitter: "https://twitter.com/techhaven",
      instagram: "https://instagram.com/techhaven",
    },
    rating: 4.5,
  },
  {
    id: "s3",
    // logo: "https://i.pinimg.com/originals/c1/92/9d/c1929d3492c2f64ab65b43808c072043.jpg",
    image: "https://imgmedia.lbb.in/media/2021/03/604af35bf9e6694e5d32d061_1615524699384.jpg",
    owner_photo: "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
    store_name: "Home & Decor",
    ownerName: "Alice Johnson",
    address: {
      pincode: "306912",
      landmark: "Shandev Mandir",
      city: "Pali",
      state: "Rajasthan",
      country: "India",
      area: "Takhatgarh",
      apartment: "Hanuman Ji Gali",
    },
    contact: {
      email: "support@homedecor.com",
      phone: "+1-512-555-1212",
    },
    description: "Beautiful home furnishings and decor items.",
    socialMedia: {
      facebook: "https://facebook.com/techhaven",
      twitter: "https://twitter.com/techhaven",
      instagram: "https://instagram.com/techhaven",
    },
    rating: 4.5,
  },
  {
    id: "s4",
    logo: "https://thumbs.dreamstime.com/b/lets-storesping-logo-design-template-cart-icon-designs-134743663.jpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoV3kS2Wg6n5b_-XJ3OXa6dZdSnpRTPX6Mdw&s",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s",
    store_name: "Book Nook",
    ownerName: "Mark Lewis",
    address: {
      pincode: "306912",
      landmark: "Shandev Mandir",
      city: "Pali",
      state: "Rajasthan",
      country: "India",
      area: "Takhatgarh",
      apartment: "Hanuman Ji Gali",
    },
    contact: {
      email: "info@booknook.com",
      phone: "+1-206-555-9876",
    },
    description: "Your neighborhood bookstore for all genres.",
    socialMedia: {
      facebook: "https://facebook.com/techhaven",
      twitter: "https://twitter.com/techhaven",
      instagram: "https://instagram.com/techhaven",
    },
    rating: 4.5,
  },
  {
    id: "s5",
    logo: "https://img.freepik.com/premium-vector/best-stores-logo-design_501861-419.jpg",
    image: "https://cdn.storesify.com/s/files/1/1246/6441/files/Sephora_stores_in_stores_480x480.jpg?v=1648491761",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s",
    store_name: "Gourmet Market",
    ownerName: "Emma Thompson",
    address: {
      pincode: "306912",
      landmark: "Shandev Mandir",
      city: "Pali",
      state: "Rajasthan",
      country: "India",
      area: "Takhatgarh",
      apartment: "Hanuman Ji Gali",
    },
    contact: {
      email: "orders@gourmetmarket.com",
      phone: "+1-503-555-7890",
    },
    description: "Organic and gourmet food items for healthy living.",
    socialMedia: {
      facebook: "https://facebook.com/techhaven",
      twitter: "https://twitter.com/techhaven",
      instagram: "https://instagram.com/techhaven",
    },
    rating: 4.5,
  },
  {
    id: "s6",
    // logo: "https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-stores-logo-vector-template-design-illustration-png-image_860078.jpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7tIped7JQzX1IDuNk2sNmCBDzN2Rhg97XQ&s",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHt2GDofV5sNOaTrLarqU3XmMpTNXxaw9dg&s",
    store_name: "Pet Paradise",
    ownerName: "Daniel Harris",
    address: {
      pincode: "306912",
      landmark: "Shandev Mandir",
      city: "Pali",
      state: "Rajasthan",
      country: "India",
      area: "Takhatgarh",
      apartment: "Hanuman Ji Gali",
    },
    contact: {
      email: "hello@petparadise.com",
      phone: "+1-303-555-1234",
    },
    description: "All the supplies and care products for your pets.",
    socialMedia: {
      facebook: "https://facebook.com/techhaven",
      twitter: "https://twitter.com/techhaven",
      instagram: "https://instagram.com/techhaven",
    },
    rating: 4.5,
  },
  {
    id: "s7",
    logo: "https://img.freepik.com/premium-vector/colorful-bag-that-says-storesping-here-here_1288538-6301.jpg?semt=ais_hybrid",
    image:
      "https://i.guim.co.uk/img/media/bb5e732bdd0ae3bafca2ca7182232a562a824dfa/0_331_6541_3924/master/6541.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2d7e945e63c81df2a9e3fdbf154c7958",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPjv1lHEIpzgDk_e3Sm-e4EVOzggYdb5aHA&s",
    store_name: "Fitness Zone",
    ownerName: "Laura Carter",
    address: {
      pincode: "306912",
      landmark: "Shandev Mandir",
      city: "Pali",
      state: "Rajasthan",
      country: "India",
      area: "Takhatgarh",
      apartment: "Hanuman Ji Gali",
    },
    contact: {
      email: "info@fitnesszone.com",
      phone: "+1-312-555-5678",
    },
    description: "Everything you need for fitness and sports activities.",
    socialMedia: {
      facebook: "https://facebook.com/techhaven",
      twitter: "https://twitter.com/techhaven",
      instagram: "https://instagram.com/techhaven",
    },
    rating: 4.5,
  },
  {
    id: "s8",
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/store-logo-design%2C-online-storesping-store-logo-template-b96b23a1a56e685fe30519cbf20883bc_screen.jpg?ts=1662903800",
    image: "https://c8.alamy.com/comp/CF4H1C/the-exterior-of-a-local-convenience-stores-british-food-wine-store-in-CF4H1C.jpg",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjw9i6PO7C3BluMusZzcQs2J7BWkF0pLSrRw&s",
    store_name: "Kids World",
    ownerName: "Nancy Lee",
    address: {
      pincode: "306912",
      landmark: "Shandev Mandir",
      city: "Pali",
      state: "Rajasthan",
      country: "India",
      area: "Takhatgarh",
      apartment: "Hanuman Ji Gali",
    },
    contact: {
      email: "support@kidsworld.com",
      phone: "+1-213-555-4321",
    },
    description: "A wide range of toys and products for children of all ages.",
    socialMedia: {
      facebook: "https://facebook.com/techhaven",
      twitter: "https://twitter.com/techhaven",
      instagram: "https://instagram.com/techhaven",
    },
    rating: 4.5,
  },
];

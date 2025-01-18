export interface IAbout {
  function: FunctionSection;
  contact?: Contact;
  board: string;
  instagram: string;
}

type FunctionKeys = "about" | "Why Choose Fiber Coolers?" | "Our Products" | "Our Commitment to Quality" | "Sustainability at Heart" | "Our Vision";

// Use an intersection type to include additional properties if necessary
export type FunctionSection = {
  [key in FunctionKeys]: string[];
} & {
  // Add any additional properties or methods here if needed
};

export interface Contact {
  email?: string;
  phone_1?: string;
  phone_2?: string;
  address?: string;
  map_address?: string;
}

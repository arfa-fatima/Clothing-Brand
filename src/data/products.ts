export const PRODUCTS = [
  {
    id: 1,
    name: "Embroidered Silk Kurti",
    category: "Pret",
    price: "PKR 7,500",
    image: "pret.jpeg",
  },
  {
    id: 2,
    name: "Classic Velvet Kaftan",
    category: "Formal",
    price: "PKR 14,000",
    image: "formal.webp",
  },
  {
    id: 3,
    name: "Lawn 3-Piece Floral Print",
    category: "Unstitched",
    price: "PKR 5,200",
    image: "unstitched.webp",
  },
  {
    id: 4,
    name: "Minimalist Linen Tunic",
    category: "Pret",
    price: "PKR 6,800",
    image: "pret2.jpeg",
  },
];


export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  tag?: string;
}

export const NewArrival: Product[] = [
  {
    id: 1,
    name: "Embroidered Silk Kurti",
    category: "Pret",
    price: "Rs. 18,500",
    image: "/newarrival1.jpeg",
    tag: "Just In",
  },
  {
    id: 2,
    name: "Classic Velvet Kaftan",
    category: "Formal",
    price: "Rs. 32,000",
    image: "/newarrival2.jpeg",
    tag: "Trending",
  },
  {
    id: 3,
    name: "Lawn 3-Piece Floral Print",
    category: "Unstitched",
    price: "Rs. 12,500",
    image: "/newarrival1.jpeg",
    tag: "New",
  },
  {
    id: 4,
    name: "Minimalist Linen Tunic",
    category: "Pret",
    price: "Rs. 9,500",
    image: "/newarrival2.jpeg",
    tag: "New",
  },
  {
    id: 5,
    name: "Minimalist Linen Tunic",
    category: "Pret",
    price: "Rs. 9,500",
    image: "/newarrival2.jpeg",
    tag: "New",
  },
  {
    id: 6,
    name: "Minimalist Linen Tunic",
    category: "Pret",
    price: "Rs. 9,500",
    image: "/newarrival2.jpeg",
    tag: "New",
  },
  {
    id: 7,
    name: "Minimalist Linen Tunic",
    category: "Pret",
    price: "Rs. 9,500",
    image: "/newarrival2.jpeg",
    tag: "New",
  },
];


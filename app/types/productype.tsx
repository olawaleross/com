export interface ProductType {
  id: number;
  title: string;
  thumbnail: string,
  brand: string;
  category: string;
  description: string;
  price: number;
  [key: string]: any;
}
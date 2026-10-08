import { ProductType } from "../types/productype";
import { ProductCard } from "./productcard";

export const ProductList = ({ products }: {products: ProductType[]}) => {
  return (
    <div>
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
};

"use client"
import { ProductType } from "../types/productype";

export const ProductCard = ({ product }: { product: ProductType }) => {
  return(
    <div>
        <img src={product.thumbnail} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.brand}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>

        <button>view</button>
    </div>
  )
};

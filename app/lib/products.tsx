import { ProductList } from "../components/productlist";
import { notFound } from "next/navigation";
import { ProductType } from "../types/productype";

export default async function GetAllProduct() {
  const response = await fetch(`https://dummyjson.com/products`);
  if (response.status === 404) {
    notFound();
  }
  if (!response.ok) {
    throw new Error("Unable to fetch Products");
  }
  const data: { products: ProductType[] } = await response.json();
  return (
    <div>
      <ProductList products={data.products} />
    </div>
  );
}

import { Suspense } from "react";
import GetAllProduct from "./lib/products";
import Loading  from "./loading";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <GetAllProduct />
      </Suspense>
    </>
  );
}

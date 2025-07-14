import { useProduct } from "@/hooks/useProducts";
import { Product, type ProductProps } from "./Product";
import { Loader } from "lucide-react";

type Props = {
  products: ProductProps[];
};

export function ProductsList({ products }: Props) {
  const { isLoadingList } = useProduct();

  return (
    <>
      {isLoadingList ? (
        <div className="flex items-center justify-center h-full w-full">
          <Loader className="text-primary animate-spin" size={30} />;
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      )}
    </>
  );
}

import { Product, type ProductProps } from "./Product";

type Props = {
  products: ProductProps[];
};

export function GamesList({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
}

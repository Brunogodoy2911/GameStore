import { Badge } from "./Badge";
import { Product, type ProductProps } from "./Product";

type Props = {
  products: ProductProps[];
};

export function FeaturedGames({ products }: Props) {
  const featuredGames = products.slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredGames.map((product) => (
        <div className="relative">
          <Badge />
          <Product key={product.id} data={product} />
        </div>
      ))}
    </div>
  );
}

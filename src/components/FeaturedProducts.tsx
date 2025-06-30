import { Badge } from "./Badge";
import { Product, type ProductProps } from "./Product";

type Props = {
  games: ProductProps[];
};

export function FeaturedGames({ games }: Props) {
  const featuredGames = games.slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredGames.map((game) => (
        <div className="relative">
          <Badge />
          <Product key={game.id} data={game} />
        </div>
      ))}
    </div>
  );
}

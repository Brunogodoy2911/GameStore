import { Product, type ProductProps } from "./Product";

type Props = {
  games: ProductProps[];
};

export function GamesList({ games }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <Product key={game.id} data={game} />
      ))}
    </div>
  );
}

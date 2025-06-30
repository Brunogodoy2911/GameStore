import { Award } from "lucide-react";

import { GamesList } from "../components/ProductsList";
import { OfferCard } from "../components/OfferCard";
import { PromoBanner } from "../components/PromoBanner";
import { FeaturedGames } from "../components/FeaturedProducts";

import { offers } from "../utils/offers";
import { useProduct } from "../hooks/useProducts";

export function Home() {
  const { products } = useProduct();

  return (
    <div className="w-full flex flex-col overflow-x-hidden py-[4rem]">
      <PromoBanner title="Mega Promoção!" porcent="80" />

      <div className="flex flex-col px-4 2xl:mx-[19.5rem]">
        <div className="flex flex-col justify-center items-center gap-4 mt-12">
          <h1 className="text-gradient-aurora text-5xl font-bold text-center">
            Bem-vindo(a) à GameStore
          </h1>
          <p className="text-xl text-primary/90 text-center">
            Descubra os melhores jogos com os melhores preços
          </p>
        </div>

        <OfferCard offers={offers} time="23:59:55" />

        <div className="flex justify-center items-center gap-3 my-8">
          <Award size={32} className="text-yellow-300" />
          <h1 className="text-primary font-bold text-3xl text-center">
            Jogos em Destaque
          </h1>
          <Award size={32} className="text-yellow-300" />
        </div>

        <FeaturedGames products={products} />

        <div className="my-8">
          <h1 className="text-primary font-bold text-3xl text-center">
            Todos os Jogos
          </h1>
        </div>

        <GamesList products={products} />
      </div>
    </div>
  );
}

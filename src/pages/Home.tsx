import { OfferCard } from "../components/OfferCard";
import { PromoBanner } from "../components/PromoBanner";
import { offers } from "../utils/offers";

export function Home() {
  return (
    <div className="flex flex-col w-screen">
      <PromoBanner title="Mega Promoção!" porcent="80" />

      <div className="flex flex-col mx-4 lg:mx-[19.5rem]">
        <div className="flex flex-col justify-center items-center gap-4 mt-12">
          <h1 className="text-gradient-aurora text-5xl font-bold text-center">
            Bem-vindo(a) à GameStore
          </h1>
          <p className="text-xl text-primary/90">
            Descubra os melhores jogos com os melhores preços
          </p>
        </div>

        <OfferCard offers={offers} time="23:59:55" />
      </div>
    </div>
  );
}

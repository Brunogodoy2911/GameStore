import { Clock4, Zap } from "lucide-react";

import type { OfferCategory } from "../models/OfferCategory";

type Props = {
  time: string;
  offers: OfferCategory[];
};

export function OfferCard({ time, offers }: Props) {
  return (
    <div className="flex flex-1 flex-col bg-gradient-to-r from-red-600 to-orange-600 mt-12 rounded-lg p-6">
      <div className="flex flex-col gap-4 justify-between items-center md:flex-row">
        <div className="flex justify-center items-center gap-4">
          <Zap size={32} className="text-yellow-300 animate-pulse" />

          <div className="flex flex-col">
            <h1 className="font-bold text-primary text-2xl">
              Ofertas Relâmpago!
            </h1>
            <p className="text-primary/90 text-lg">
              Promoções por tempo limitado
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-1 bg-black/30 rounded-lg px-4 py-2">
          <Clock4 size={20} className="text-white" />

          <span className="text-primary text-lg font-bold">{time}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:flex gap-2 mt-4">
        {offers.map((offer) => (
          <div
            key={offer.category}
            className="flex flex-col flex-1 justify-center items-center bg-black/30 px-8 py-4 rounded-lg"
          >
            <h1 className="text-2xl text-yellow-300 font-bold">
              {offer.porcent}%
            </h1>
            <p className="text-sm text-primary text-center">{offer.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Gift, Percent } from "lucide-react";

type Props = {
  title: string;
  porcent: string;
};

export function PromoBanner({ title, porcent }: Props) {
  return (
    <div className="w-screen h-[12rem] md:h-[8rem] flex flex-col justify-center items-center gap-4 px-6 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 md:flex-row md:justify-between lg:justify-around">
      <div className="flex justify-center items-center gap-4">
        <Gift size={48} color="#fce046" />
        <div className="flex flex-col justify-center gap-1">
          <h1 className="font-bold text-primary text-2xl md:text-3xl">
            {title}
          </h1>

          <p className="text-primary/90 text-lg">
            Até {porcent}% OFF em jogos selecionados
          </p>
        </div>
      </div>

      <div className="w-[16.75rem] h-13.5 flex justify-center items-center rounded-full bg-destructive gap-2 animate-pulse">
        <Percent size={24} className="text-primary" />
        <h1 className="text-xl font-bold text-primary uppercase">
          desconto especial
        </h1>
      </div>
    </div>
  );
}

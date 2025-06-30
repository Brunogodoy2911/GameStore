import { useState, type ComponentProps } from "react";

import { Button } from "./Button";
import { formatCurrency } from "../utils/formatCurrency";

const placeholderImage =
  "https://ik.imagekit.io/brunogodoy/placeholder.jpg?updatedAt=1751288384316";

export type ProductProps = {
  id: number;
  nome: string;
  preco: number;
  foto: string | typeof placeholderImage;
  curtir: number;
  categoria: {
    tipo: string;
  };
};

type Props = ComponentProps<"div"> & {
  data: ProductProps;
};

export function Product({ data, ...rest }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const imageSrc =
    data.foto && data.foto.startsWith("http") ? data.foto : placeholderImage;

  return (
    <div
      className="group relative bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-purple-500/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <div className="relative overflow-hidden">
        <img
          src={imageSrc}
          alt={`Capa do Jogo ${data.nome}`}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {isHovered && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300">
            <Button>
              <h1 className="font-bold text-base text-secondary">
                Adicionar ao Carrinho
              </h1>
            </Button>
          </div>
        )}
      </div>

      <div className="inset-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <h1 className="text-primary font-bold text-lg mg-2">{data.nome}</h1>

        <div className="flex justify-between">
          <span className="text-yellow-300 font-bold text-lg">
            {formatCurrency(data.preco)}
          </span>
          <span className="text-gray-400 text-sm bg-gray-700 px-2 pt-1 rounded">
            {data.categoria.tipo}
          </span>
        </div>
      </div>
    </div>
  );
}

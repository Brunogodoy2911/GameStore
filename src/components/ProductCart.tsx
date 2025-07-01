import { Minus, Trash2 } from "lucide-react";
import { Button } from "./Button";
import type { ProductProps } from "./Product";

type Props = {
  product: ProductProps;
};

export function ProductCart({ product }: Props) {
  return (
    <div className="flex flex-col sm:flex-row justify-between text-primary px-4">
      <div className="flex items-center gap-4">
        <img
          src={product.foto}
          alt={`Capa do jogo ${product.nome}`}
          className="w-18 h-32 object-contain"
        />

        <div>
          <h1 className="font-bold text-sm max-w-18">{product.nome}</h1>
          <p className="text-gray-400 text-sm mb-2">{product.categoria.tipo}</p>

          <span className="text-yellow-400 font-bold text-base">{`R$ ${product.preco}`}</span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mb-4">
        <Button
          variant="iconSmall"
          className="bg-gray-700 hover:bg-gray-600 text-lg"
        >
          <Minus className="text-primary" size={16} />
        </Button>
        <span className="mx-2 font-bold text-lg">1</span>
        <Button
          variant="iconSmall"
          className="bg-gray-700 hover:bg-gray-600 text-lg"
        >
          +
        </Button>

        <Button variant="iconSmall" className="bg-destructive ml-2">
          <Trash2 className="text-primary" size={16} />
        </Button>
      </div>
    </div>
  );
}

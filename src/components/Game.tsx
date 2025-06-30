import { useState } from "react";

import { Button } from "./Button";

export function Game() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-purple-500/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src="https://ik.imagekit.io/brunogodoy/imagens_api/god.png?updatedAt=1747847924686"
          alt="Capa do jogo god of war ragnarok"
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
        <h1 className="text-primary font-bold text-lg mg-2">
          God of War Raganrok
        </h1>

        <p className="text-gray-400 text-sm mb-3 min-w-full">
          Finalização da saga nordica com chave de ouro
        </p>

        <div className="flex justify-between">
          <span className="text-yellow-300 font-bold text-lg">R$ 190,90</span>
          <span className="text-gray-400 text-sm bg-gray-700 px-2 pt-1 rounded">
            Rpg
          </span>
        </div>
      </div>
    </div>
  );
}

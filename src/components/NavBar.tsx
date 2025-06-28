import { House, ShoppingCart } from "lucide-react";

export function NavBar() {
  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-40">
      <div className="gap-2">
        <h1 className="text-2xl font-bold g-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          GameStore
        </h1>

        <p className="text-base gap-1">
          <House size={15} color="white" />
          Início
        </p>

        <p className="text-base">Categorias</p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <ShoppingCart size={15} color="white" />
        <p className="text-base">Categorias</p>
      </div>
    </nav>
  );
}

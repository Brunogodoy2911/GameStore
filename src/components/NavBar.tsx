import { House, ShoppingCart } from "lucide-react";

export function NavBar() {
  return (
    <nav className="w-screen h-[4rem] flex justify-between lg:justify-around lg:px-0 items-center bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 px-6">
      <div className="flex justify-center items-center gap-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          GameStore
        </h1>

        <div className="hidden md:flex items-center gap-6 text-[var(--color-secondary)]">
          <div className="flex justify-center items-center gap-2 hover:text-primary transition-colors cursor-pointer">
            <House size={18} />
            <p className="text-base">Início</p>
          </div>

          <p className="text-base hover:text-primary transition-colors cursor-pointer">
            Categorias
          </p>
        </div>
      </div>

      <div
        className="flex justify-center items-center gap-2 text-[var(--color-secondary)]
         hover:text-primary transition-colors cursor-pointer md:px-4"
      >
        <ShoppingCart size={20} />
        <p className="text-base">Carrinho</p>
      </div>
    </nav>
  );
}

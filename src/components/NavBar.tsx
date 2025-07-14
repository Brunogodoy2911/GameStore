import { useCart } from "@/hooks/useCart";
import { ShoppingCart } from "lucide-react";

type Props = {
  onCartClick: () => void;
};

export function NavBar({ onCartClick }: Props) {
  const { totalQuantity } = useCart();

  return (
    <nav className="fixed top-0 w-full h-[4rem] flex justify-between lg:justify-around lg:px-0 items-center bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 px-6 z-30">
      <div className="flex justify-center items-center gap-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          GameStore
        </h1>
      </div>

      <div
        className="text-[var(--color-secondary)]
         hover:text-primary transition-colors cursor-pointer md:px-4"
        onClick={onCartClick}
      >
        <div className="relative flex gap-2">
          <ShoppingCart size={24} />
          <p className="text-base text-primary hidden sm:inline">Carrinho</p>

          {totalQuantity > 0 && (
            <span className="absolute top-[-12px] right-[-12px] flex justify-center items-center bg-purple-600 px-1.5 rounded-full text-sm font-bold">
              {totalQuantity}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

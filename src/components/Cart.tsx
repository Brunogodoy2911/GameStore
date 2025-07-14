import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ProductCart } from "./ProductCart";
import type { ProductProps } from "./Product";
import { Button } from "./Button";
import { useCart } from "@/hooks/useCart";
import { formatCurrency } from "@/utils/formatCurrency";

type Props = {
  products: ProductProps[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function Cart({ isOpen, onOpenChange }: Props) {
  const { productsInCart, clearCart, totalPrice } = useCart();

  const totalPriceFormatted = formatCurrency(totalPrice);

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="flex border-l-0 bg-gradient-to-br from-gray-900 to-black">
        <SheetHeader>
          <SheetTitle className="text-primary font-bold text-2xl">
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col overflow-y-auto">
          {productsInCart.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
        <SheetFooter>
          <div className="flex justify-between mb-4">
            <span className="text-2xl text-primary font-bold">
              Preço Total:
            </span>
            <span className="text-2xl text-yellow-300 font-bold">
              R$ {totalPriceFormatted}
            </span>
          </div>

          <Button className="text-secondary text-lg font-bold">
            Finalizar Compra
          </Button>
          <Button
            className="bg-destructive text-secondary text-lg font-bold hover:bg-destructive/80"
            onClick={clearCart}
          >
            Limpar Carrinho
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

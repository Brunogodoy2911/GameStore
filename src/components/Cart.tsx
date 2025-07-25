import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ProductCart } from "./ProductCart";
import { Button } from "./Button";
import { useCart } from "@/hooks/useCart";
import { formatCurrency } from "@/utils/formatCurrency";

export function Cart() {
  const {
    productsInCart,
    clearCart,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    finishCart,
  } = useCart();

  const totalPriceFormatted = formatCurrency(totalPrice);

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
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

          <Button
            onClick={finishCart}
            className="text-secondary text-lg font-bold"
          >
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

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

type Props = {
  products: ProductProps[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function Cart({ products, isOpen, onOpenChange }: Props) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="flex border-l-0 bg-gradient-to-br from-gray-900 to-black">
        <SheetHeader>
          <SheetTitle className="text-primary font-bold text-2xl">
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col overflow-y-auto">
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
        <SheetFooter>
          <div className="flex justify-between mb-4">
            <span className="text-2xl text-primary font-bold">
              Preço Total:
            </span>
            <span className="text-2xl text-yellow-300 font-bold">
              R$ 109,90
            </span>
          </div>

          <Button className="text-secondary text-lg font-bold">
            Finalizar Compra
          </Button>
          <Button
            className="bg-destructive text-secondary text-lg font-bold hover:bg-destructive/80"
            onClick={() => onOpenChange(false)}
          >
            Fechar
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

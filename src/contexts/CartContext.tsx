import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ProductProps } from "@/components/Product";
import { toast } from "react-toastify";

type CartContext = {
  productsInCart: ProductProps[];
  totalPrice: number;
  totalQuantity: number;
  isCartOpen: boolean;
  addProduct: (product: ProductProps) => void;
  removeProduct: (productId: number) => void;
  clearCart: () => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  setIsCartOpen: (isOpen: boolean) => void;
  finishCart: () => void;
};

const LOCAL_STORAGE_KEY = "@game-store:cart";

export const CartContext = createContext({} as CartContext);

export function CartProvider({ children }: { children: ReactNode }) {
  const [productsInCart, setProductsInCart] = useState<ProductProps[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function addProduct(product: ProductProps) {
    setProductsInCart((currentProducts) => {
      const existingProduct = currentProducts.find((p) => p.id === product.id);

      if (existingProduct) {
        return currentProducts.map((p) =>
          p.id === product.id
            ? { ...p, quantidade: (p.quantidade || 0) + 1 }
            : p
        );
      } else {
        return [...currentProducts, { ...product, quantidade: 1 }];
      }
    });
    setIsCartOpen(true);
    toast.success("Produto adicionado ao carrinho!");
  }

  function removeProduct(productId: number) {
    setProductsInCart((currentProducts) =>
      currentProducts.filter((p) => p.id !== productId)
    );
  }

  function increaseQuantity(productId: number) {
    setProductsInCart((currentProducts) =>
      currentProducts.map((p) =>
        p.id === productId ? { ...p, quantidade: (p.quantidade || 0) + 1 } : p
      )
    );
  }

  function decreaseQuantity(productId: number) {
    setProductsInCart((currentProducts) => {
      const productToUpdate = currentProducts.find((p) => p.id === productId);

      if (productToUpdate && productToUpdate.quantidade === 1) {
        return currentProducts.filter((p) => p.id !== productId);
      }

      return currentProducts.map((p) =>
        p.id === productId ? { ...p, quantidade: (p.quantidade || 1) - 1 } : p
      );
    });
  }

  function clearCart() {
    setProductsInCart([]);
  }

  function finishCart() {
    clearCart();
    setIsCartOpen(false);

    toast.success("Compra finalizada com sucesso!");
  }

  function fetchCart() {
    const cart = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (cart) {
      const parsedCart = JSON.parse(cart);
      setProductsInCart(parsedCart);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    if (productsInCart.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(productsInCart));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [productsInCart]);

  const totalQuantity = useMemo(() => {
    return productsInCart.reduce(
      (total, product) => total + (product.quantidade || 0),
      0
    );
  }, [productsInCart]);

  const totalPrice = useMemo(() => {
    return productsInCart.reduce((total, product) => {
      return total + product.preco * (product.quantidade || 0);
    }, 0);
  }, [productsInCart]);

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        addProduct,
        removeProduct,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
        totalQuantity,
        isCartOpen,
        setIsCartOpen,
        finishCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

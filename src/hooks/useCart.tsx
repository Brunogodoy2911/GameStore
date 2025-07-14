import { CartContext } from "@/contexts/CartContext";
import { use } from "react";

export function useCart() {
  const context = use(CartContext);

  return context;
}

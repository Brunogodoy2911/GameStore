import { use } from "react";
import { ProductContext } from "../contexts/ProductContext";

export function useProduct() {
  const context = use(ProductContext);

  return context;
}

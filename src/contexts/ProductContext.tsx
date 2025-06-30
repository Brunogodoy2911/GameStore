import { createContext, useEffect, useState, type ReactNode } from "react";

import { AxiosError } from "axios";
import { api } from "../services/api";

import type { ProductProps } from "../components/Product";

type ProductContext = {
  isLoading: boolean;
  fetchProducts: () => void;
  products: ProductProps[];
};

export const ProductContext = createContext({} as ProductContext);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);

      const response = await api.get("/produtos");

      setProducts(
        response.data.map((game: ProductProps) => ({
          id: game.id,
          nome: game.nome,
          preco: game.preco,
          foto: game.foto,
          curtir: game.curtir,
          categoria: {
            tipo: game.categoria.tipo,
          },
        }))
      );
    } catch (e) {
      console.log(e);

      if (e instanceof AxiosError) {
        return alert(e.response?.data.message);
      }

      alert("Não foi possível carregar os produtos!");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ isLoading, fetchProducts, products }}>
      {children}
    </ProductContext.Provider>
  );
}

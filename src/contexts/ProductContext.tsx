import { createContext, useEffect, useState, type ReactNode } from "react";

import { AxiosError } from "axios";
import { api } from "../services/api";

import type { CategoryProps, ProductProps } from "../components/Product";

type ProductContext = {
  isLoading: boolean;
  isLoadingList: boolean;
  products: ProductProps[];
  productsByCategory: ProductProps[];
  category: CategoryProps;
  setCategory: (category: CategoryProps) => void;
};

export const ProductContext = createContext({} as ProductContext);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<ProductProps[]>(
    []
  );
  const [category, setCategory] = useState<CategoryProps>({
    tipo: "Todos",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingList, setIsLoadingList] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);

      const response = await api.get("/produtos");

      setProducts(response.data ?? []);
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

  async function fetchProductsByCategory() {
    try {
      setIsLoadingList(true);

      if (category.tipo === "Todos") {
        const response = await api.get("/produtos");
        setProductsByCategory(response.data ?? []);
        return;
      }

      const response = await api.get(`/categorias/tipo/${category.tipo}`);

      if (response.data && response.data.length > 0) {
        const categoryObject = response.data[0];
        const productsWithoutCategory = categoryObject.produto;

        const productsWithCategory = productsWithoutCategory.map(
          (product: ProductProps) => ({
            ...product,
            categoria: {
              tipo: categoryObject.tipo,
            },
          })
        );

        setProductsByCategory(productsWithCategory);
      } else {
        setProductsByCategory([]);
      }
    } catch (e) {
      console.log(e);
      if (e instanceof AxiosError) {
        return alert(e.response?.data.message);
      }
      alert("Não foi possível carregar os produtos pela categoria!");
    } finally {
      setIsLoadingList(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProductsByCategory();
  }, [category.tipo]);

  return (
    <ProductContext.Provider
      value={{
        isLoading,
        isLoadingList,
        products,
        productsByCategory,
        category,
        setCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

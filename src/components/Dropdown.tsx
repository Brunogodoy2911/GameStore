import { useMemo } from "react";
import { ListFilter } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./Button";
import { useProduct } from "@/hooks/useProducts";
import type { CategoryProps } from "@/components/Product";

export function DropDown() {
  const { products, setCategory, category } = useProduct();

  const allCategories = useMemo(() => {
    const categoriesMap = new Map<number, CategoryProps>();
    products.forEach((product) => {
      if (product.categoria.id !== undefined) {
        categoriesMap.set(product.categoria.id, product.categoria);
      }
    });
    const uniqueCategories = Array.from(categoriesMap.values());
    return [{ id: 0, tipo: "Todos" }, ...uniqueCategories];
  }, [products]);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="icon" className="p-1.5 sm:px-7 sm:py-3 gap-2">
          <ListFilter className="text-secondary" />
          <h1 className="text-secondary text-lg hidden font-bold sm:inline">
            Filtrar
          </h1>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48 sm:w-56 bg-gray-500 z-20"
      >
        <DropdownMenuLabel className="text-base font-bold text-white">
          Categorias
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {allCategories.map((cat) => (
          <DropdownMenuCheckboxItem
            key={cat.id}
            checked={category?.tipo === cat.tipo}
            onCheckedChange={() => {
              setCategory(cat);
            }}
            className="text-secondary text-lg hover:bg-purple-600 focus:bg-purple-600 focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
          >
            {cat.tipo}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// DropDown.tsx
import React, { useMemo } from "react";
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

export function DropDown() {
  const { products, setCategory, category } = useProduct();

  const uniqueCategories = useMemo(() => {
    const categoriesMap = new Map();
    products.forEach((product) => {
      categoriesMap.set(product.categoria.id, product.categoria);
    });
    return Array.from(categoriesMap.values());
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

      <DropdownMenuContent align="end" className="w-48 sm:w-56 bg-gray-500">
        <DropdownMenuLabel className="text-base font-bold text-white">
          Categorias
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {uniqueCategories.map((cat) => (
          <DropdownMenuCheckboxItem
            key={cat.id}
            checked={category?.id === cat.id}
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

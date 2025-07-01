import { useState } from "react";
import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import { Cart } from "./Cart";
import { useProduct } from "@/hooks/useProducts";

export function AppLayout() {
  const { products } = useProduct();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <NavBar onCartClick={() => setIsCartOpen(true)} />
      <Outlet />

      <Cart
        products={products}
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
      />
    </main>
  );
}

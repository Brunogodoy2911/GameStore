import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";
import { Routes } from "./routes";

export function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </ProductProvider>
  );
}

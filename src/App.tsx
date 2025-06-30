import { ProductProvider } from "./contexts/ProductContext";
import { Routes } from "./routes";

export function App() {
  return (
    <ProductProvider>
      <Routes />
    </ProductProvider>
  );
}

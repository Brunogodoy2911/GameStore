import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";
import { Routes } from "./routes";

import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Routes />
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </CartProvider>
    </ProductProvider>
  );
}

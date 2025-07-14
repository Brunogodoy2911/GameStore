import { LoadingScreen } from "../pages/LoadingScreen";
import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router";
import { useProduct } from "../hooks/useProducts";

export function Routes() {
  const { isLoading } = useProduct();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

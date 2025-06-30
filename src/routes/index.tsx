import { LoadingScreen } from "../pages/LoadingScreen";
import { AdminRoutes } from "./AdminRoutes";
import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router";
import { useProduct } from "../hooks/useProducts";

export function Routes() {
  const { isLoading } = useProduct();

  const role = "user";

  function Route() {
    switch (role) {
      case "user":
        return <AppRoutes />;
      default:
        return <AdminRoutes />;
    }
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}

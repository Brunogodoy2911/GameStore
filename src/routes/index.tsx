import { useEffect, useState } from "react";
import { LoadingScreen } from "../pages/LoadingScreen";
import { AdminRoutes } from "./AdminRoutes";
import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router";

export function Routes() {
  const [isLoading, setIsLoading] = useState(true);

  const role = "user";

  function Route() {
    switch (role) {
      case "user":
        return <AppRoutes />;
      default:
        return <AdminRoutes />;
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}

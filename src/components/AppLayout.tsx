import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import { Cart } from "./Cart";

export function AppLayout() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <NavBar />
      <Outlet />

      <Cart />
    </main>
  );
}

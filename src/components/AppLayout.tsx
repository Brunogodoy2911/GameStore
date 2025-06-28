import { Outlet } from "react-router";
import { NavBar } from "./NavBar";

export function AppLayout() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <main className="w-full md:w-auto">
        <NavBar />
        <Outlet />
      </main>
    </div>
  );
}

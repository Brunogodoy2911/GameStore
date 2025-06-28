import { Route, Routes } from "react-router";

import { NotFound } from "../pages/NotFound";
import { Admin } from "../pages/Admin";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

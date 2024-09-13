import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import PageNotFound from "../components/ui/PageNotFound";
import Home from "../pages/home/Home";

export default function Navigations() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route />
    </Routes>
  );
}

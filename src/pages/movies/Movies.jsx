import { Outlet } from "react-router-dom";

export default function Movies() {
  return (
    <div className="min-h-[calc(100vh-80px)]">
      <Outlet />
    </div>
  );
}

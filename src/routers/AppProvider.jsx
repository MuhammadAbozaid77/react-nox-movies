import Navigations from "./Navigations";
import RouterProvider from "./RouterProvider";

export default function AppProvider() {
  return (
    <>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <RouterProvider>
        <Navigations />
      </RouterProvider>
    </>
  );
}

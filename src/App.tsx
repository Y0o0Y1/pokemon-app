import { RouterProvider } from "react-router";
import router from "./router/index.ts";
import LoadingOverlay from "./components/LoadingOverlay.tsx";

function App() {
  return (
    <>
      <LoadingOverlay />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;

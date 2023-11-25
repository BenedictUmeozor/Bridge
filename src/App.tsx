import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster />
    </main>
  );
};
export default App;

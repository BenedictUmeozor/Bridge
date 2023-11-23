import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";

const App = () => {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default App;

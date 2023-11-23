import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home";
import OnBoarding from "../pages/create";
import Login from "../pages/login";
import DashboardLayout from "../pages/dashboard";
import Dashboard from "../pages/dashboard/main";
import Profile from "../pages/dashboard/profile";
import SendMoney from "../pages/dashboard/send-money";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="create" element={<OnBoarding />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="send-money" element={<SendMoney />} />
      </Route>
    </Route>
  )
);

export default router;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy } from "react";
import App from "../App";

const HomePage = lazy(() => import("../pages/home"));
const OnBoarding = lazy(() => import("../pages/create"));
const Login = lazy(() => import("../pages/login"));
const DashboardLayout = lazy(() => import("../pages/dashboard"));
const Dashboard = lazy(() => import("../pages/dashboard/main"));
const Profile = lazy(() => import("../pages/dashboard/profile"));
const SendMoney = lazy(() => import("../pages/dashboard/send-money"));

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

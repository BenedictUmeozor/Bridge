import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { lazy } from "react";
import App from "../App";
import Transactions from "../pages/dashboard/transactions";

const HomePage = lazy(() => import("../pages/home"));
const OnBoarding = lazy(() => import("../pages/create"));
const Login = lazy(() => import("../pages/login"));
const FAQ = lazy(() => import("../pages/faq"));
const DashboardLayout = lazy(() => import("../pages/dashboard"));
const Dashboard = lazy(() => import("../pages/dashboard/main"));
const Profile = lazy(() => import("../pages/dashboard/profile"));
const SendMoney = lazy(() => import("../pages/dashboard/send-money"));
const Beneficiaries = lazy(() => import("../pages/dashboard/beneficiaries"));
const AddBeneficiaries = lazy(
  () => import("../pages/dashboard/beneficiaries/add")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="create" element={<OnBoarding />} />
      <Route path="login" element={<Login />} />
      <Route path="faqs" element={<FAQ />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="send-money" element={<SendMoney />} />
        <Route path="beneficiaries" element={<Beneficiaries />} />
        <Route path="beneficiaries/add" element={<AddBeneficiaries />} />
        <Route path="transactions" element={<Transactions />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

export default router;

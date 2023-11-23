import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import send_money from "../../assets/icons/send-money.svg";
import beneficiaries from "../../assets/icons/beneficiaries.svg";
import transactions from "../../assets/icons/transactions.svg";
import support from "../../assets/icons/support.svg";
import logout from "../../assets/icons/logout.svg";
import bell from "../../assets/icons/bell.svg";
import dashboard_user from "../../assets/icons/dashboard_user.svg";

const DashboardLayout = () => {
  return (
    <div className="dashboard grid grid-cols-12 h-screen  max-w-7xl mx-auto">
      <div className="col-span-3 bg-primary_blue flex flex-col items-center justify-between h-screen pb-5">
        <div>
          <Link to="/dashboard" className="block py-4 mb-10">
            <img src={logo} alt="image" className="w-44 mx-auto" />
          </Link>
          <ul>
            <li className="mb-6 w-full flex items-center justify-center">
              <NavLink
                to="/dashboard"
                className="inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95"
              >
                <img src={dashboard} alt="image" className="w-6" />
                <span className="text-white">Dashboard</span>
              </NavLink>
            </li>
            <li className="mb-6 w-full flex items-center justify-center">
              <NavLink
                to="/dashboard/send-money"
                className="inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95"
              >
                <img src={send_money} alt="image" className="w-6" />
                <span className="text-white">Send Money</span>
              </NavLink>
            </li>
            <li className="mb-6 w-full flex items-center justify-center">
              <NavLink
                to="/dashboard/beneficiaries"
                className="inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95"
              >
                <img src={beneficiaries} alt="image" className="w-6" />
                <span className="text-white">Beneficiaries</span>
              </NavLink>
            </li>
            <li className="mb-6 w-full flex items-center justify-center">
              <NavLink
                to="/dashboard/transactions"
                className="inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95"
              >
                <img src={transactions} alt="image" className="w-6" />
                <span className="text-white">Transactions</span>
              </NavLink>
            </li>
            <li className="mb-6 w-full flex items-center justify-center">
              <NavLink
                to="/dashboard/support"
                className="inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95"
              >
                <img src={support} alt="image" className="w-6" />
                <span className="text-white">Support</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95">
            <img src={logout} alt="image" className="w-6" />
            <span className="text-white">Logout</span>
          </button>
        </div>
      </div>
      <div className="col-span-9 overflow-y-auto h-screen md:p-4">
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-4">
            <div className="bg-[#CCD0DE] h-12 w-12 flex items-center justify-center rounded-xl  cursor-pointer transition-all duration-150 ease-in hover:scale-95">
              <img src={bell} alt="image" className="w-10" />
            </div>

            <Link to="/dashboard/profile">
              <img
                src={dashboard_user}
                alt="image"
                className="w-24 cursor-pointer transition-all duration-150 ease-linear hover:scale-95"
              />
            </Link>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;

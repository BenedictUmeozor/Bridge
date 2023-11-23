import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import send_money from "../../assets/icons/send-money.svg";
import beneficiaries from "../../assets/icons/beneficiaries.svg";
import transactions from "../../assets/icons/transactions.svg";
import support from "../../assets/icons/support.svg";
import logout from "../../assets/icons/logout.svg";
import bell from "../../assets/icons/bell.svg";
import dashboard_user from "../../assets/icons/dashboard_user.svg";
import { Menu } from "react-feather";
import MenuPage from "./components/Menu";
import { useState } from "react";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="dashboard grid grid-cols-12 h-screen  max-w-7xl mx-auto max-md:block">
        <div className="col-span-3 bg-primary_blue flex flex-col items-center justify-between h-screen pb-5 max-md:hidden">
          <div>
            <Link to="/dashboard" className="block py-4 mb-10">
              <img src={logo} alt="image" className="w-44 mx-auto" />
            </Link>
            <ul>
              <li className="mb-6 w-full flex items-center justify-center">
                <Link
                  to="/dashboard"
                  className={
                    "inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95 " +
                    (pathname.split("/").length === 2 ? "bg-[#AAB1C7]" : "")
                  }
                >
                  <img src={dashboard} alt="image" className="w-6" />
                  <span className="text-white">Dashboard</span>
                </Link>
              </li>
              <li className="mb-6 w-full flex items-center justify-center">
                <Link
                  to="/dashboard/send-money"
                  className={
                    "inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95 " +
                    (pathname.split("/").includes("send-money")
                      ? "bg-[#AAB1C7]"
                      : "")
                  }
                >
                  <img src={send_money} alt="image" className="w-6" />
                  <span className="text-white">Send Money</span>
                </Link>
              </li>
              <li className="mb-6 w-full flex items-center justify-center">
                <Link
                  to="/dashboard/beneficiaries"
                  className={
                    "inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95 " +
                    (pathname.split("/").includes("beneficiaries")
                      ? "bg-[#AAB1C7]"
                      : "")
                  }
                >
                  <img src={beneficiaries} alt="image" className="w-6" />
                  <span className="text-white">Beneficiaries</span>
                </Link>
              </li>
              <li className="mb-6 w-full flex items-center justify-center">
                <Link
                  to="/dashboard/transactions"
                  className={
                    "inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95 " +
                    (pathname.split("/").includes("transactions")
                      ? "bg-[#AAB1C7]"
                      : "")
                  }
                >
                  <img src={transactions} alt="image" className="w-6" />
                  <span className="text-white">Transactions</span>
                </Link>
              </li>
              <li className="mb-6 w-full flex items-center justify-center">
                <Link
                  to="/dashboard"
                  className={
                    "inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95 " +
                    (pathname.split("/").includes("support")
                      ? "bg-[#AAB1C7]"
                      : "")
                  }
                >
                  <img src={support} alt="image" className="w-6" />
                  <span className="text-white">Support</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button
              className={
                "inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95 "
              }
            >
              <img src={logout} alt="image" className="w-6" />
              <span className="text-white">Logout</span>
            </button>
          </div>
        </div>
        <div className="col-span-9 overflow-y-auto h-screen md:p-8 max-md:px-2">
          <div className="flex items-center justify-end max-md:justify-between max-md:mb-4 max-md:py-3">
            <div className="flex items-center gap-4">
              <div className="bg-[#CCD0DE] h-12 w-12 flex items-center justify-center rounded-xl  cursor-pointer transition-all duration-150 ease-in hover:scale-95 max-md:h-10 max-md:w-10">
                <img src={bell} alt="image" className="w-10" />
              </div>

              <Link to="/dashboard/profile">
                <img
                  src={dashboard_user}
                  alt="image"
                  className="w-24 cursor-pointer transition-all duration-150 ease-linear hover:scale-95 max-md:w-16"
                />
              </Link>
            </div>
            <div className="md:hidden " onClick={() => setOpen(true)}>
              <Menu className="md:hidden w-9 h-9 " />
            </div>
          </div>

          <Outlet />
        </div>
      </div>
      {open && <MenuPage onClick={() => setOpen(false)} />}
    </>
  );
};
export default DashboardLayout;

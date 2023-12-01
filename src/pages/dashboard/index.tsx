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
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Protected from "../../components/Protected";
import Loading from "../../components/Backdrop";
import { toast } from "react-hot-toast";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const signout = async () => {
    setIsLoading(true);
    setLoggedOut(false);

    try {
      await delay(3000);

      sessionStorage.removeItem("id");
      sessionStorage.removeItem("token");

      setIsLoading(false);
      setLoggedOut(true);
    } catch (error) {
      setIsLoading(false);

      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading("Logging you out", { duration: 3000 });
    } else if (loggedOut) {
      toast.success("You are logged out");
    }
  }, [isLoading, loggedOut]);

  return (
    <>
      <Helmet>
        <title>Bridge - Dashboard</title>
      </Helmet>
      {isLoading && <Loading />}
      <Protected>
        <div className="dashboard grid grid-cols-12 h-screen max-w-full mx-auto max-md:block">
          <div className="col-span-3 bg-primary_blue flex flex-col items-center justify-between h-screen py-5 lg:pt-8 xl:pt-12 max-md:hidden">
            <div>
              <Link to="/dashboard" className="block py-4 mb-10">
                <img src={logo} alt="image" className="w-44 mx-auto" />
              </Link>
              <ul>
                <li className="mb-6 w-full justify-center xl:mb-8">
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
                <li className="mb-6 w-full justify-center xl:mb-8">
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
                <li className="mb-6 w-full justify-center xl:mb-8">
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
                <li className="mb-6 w-full justify-center xl:mb-8">
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
                <li className="mb-6 w-full justify-center xl:mb-8">
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
            <ul>
              <li className=" w-full justify-center">
                <button
                  className={
                    "inline-flex mx-auto items-center justify-center gap-2 py-2 px-8 rounded-md hover:scale-95 "
                  }
                  onClick={signout}
                >
                  <img src={logout} alt="image" className="w-6" />
                  <span className="text-white">Logout</span>
                </button>
              </li>
            </ul>
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

            <div className="xl:pt-16 xl:pb-4">
              <Outlet />
            </div>
          </div>
        </div>
      </Protected>
      {open && <MenuPage onClick={() => setOpen(false)} signout={signout} />}
    </>
  );
};
export default DashboardLayout;

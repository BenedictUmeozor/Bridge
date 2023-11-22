import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import dashboard from "../../assets/icons/dashboard.svg";

const DashboardLayout = () => {
  return (
    <div className="dashboard grid grid-cols-12 h-screen overflow-y-auto max-w-7xl mx-auto">
      <div className="col-span-4 bg-primary_blue">
        <div>
          <Link to="/dashboard" className="block py-4 mb-10">
            <img src={logo} alt="image" className="w-48 mx-auto" />
          </Link>
          <ul>
            <li className="mb-6 w-full flex items-center justify-center">
              <NavLink to="/dashboard" className="inline-flex mx-auto items-center justify-center gap-2 py-2 px-4 rounded-md">
                <img src={dashboard} alt="image" className="w-6" />
                <span className="text-white">Dashboard</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-8">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;

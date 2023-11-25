import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo.png";
import { X } from "react-feather";

type Props = {
  onClick: () => void;
  signout: () => void;
};

const MenuPage = ({ onClick, signout }: Props) => {
  return (
    <div className="menu_page md:hidden fixed top-0 left-0 w-full h-screen bg-white z-30">
      <div className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img src={logo} alt="Bridge" className="w-14" />
          <h1 className="text-primary_blue text-lg tracking-wider font-[1000]">
            BRIDGE
          </h1>
        </Link>
        <X className="w-9 h-9 text-primary_blue" onClick={onClick} />
      </div>
      <ul className="mt-10 flex flex-col items-center justify-center gap-6 font-semibold">
        <li>
          <Link to="/dashboard" onClick={onClick}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/dashboard/send-money" onClick={onClick}>
            Send money
          </Link>
        </li>
        <li>
          <Link to="/dashboard/beneficiaries" onClick={onClick}>
            Beneficiaries
          </Link>
        </li>
        <li>
          <Link to="/dashboard/transactions" onClick={onClick}>
            Transactions
          </Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={onClick}>
            Support
          </Link>
        </li>
        <li>
          <button onClick={signout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};
export default MenuPage;

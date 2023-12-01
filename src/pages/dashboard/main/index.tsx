import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "react-feather";
import ExchangeRate from "./components/ExchangeRate";
import no_transactions from "../../../assets/icons/no-transactions.svg";

const Dashboard = () => {
  const [showCash, setShowCash] = useState(false);
  const [profileCompleted, setProfileCompleted] = useState(true);

  const firstName = JSON.parse(sessionStorage.getItem("firstName")!);

  useEffect(() => {
    if (!firstName) {
      setProfileCompleted(false);
    }
  }, [firstName]);
  return (
    <div>
      {!profileCompleted && (
        <p className="mb-4 text-[0.9rem]">
          To continue, proceed to{" "}
          <Link to="/dashboard/profile" className="underline">
            update your profile
          </Link>
        </p>
      )}
      <h2 className="text-3xl font-bold mb-6">Welcome,</h2>

      <div className="max-w-lg bg-[#E8EAF0] rounded-md py-6 px-4 flex items-center justify-between   max-md:px-2 max-md:block">
        <div>
          <div className="flex items-center gap-3 max-md:mb-3">
            <h2 className="font-bold text-2xl">
              {showCash ? 100000 : "*****"}
            </h2>
            <div
              className="cursor-pointer flex items-center justify-center"
              onClick={() => setShowCash((prev) => !prev)}
            >
              {showCash ? <Eye className="w-4" /> : <EyeOff className="w-4" />}
            </div>
          </div>
          <p className="mt-4 max-md:mt-2">
            Account Number: 0123456789
          </p>
        </div>
        <Link
          to="/dashboard/send-money"
          className="text-white bg-primary_blue rounded-xl border-2 py-2 px-6 hover:scale-95 max-md:inline-block max-md:mt-4"
        >
          Send money
        </Link>
      </div>

      <div className="mt-8">
        <h2 className="text-xl mb-3 font-semibold">Exchange rate</h2>
        <p className="mb-10">Enter an amount to know the exchange rate</p>
        <ExchangeRate />
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl mb-3 font-semibold">Recent Activity</h2>
            <Link
              to="/dashboard/transactions"
              className="underline text-primary_blue cursor-pointer"
            >
              See all
            </Link>
          </div>
          <div className="mt-6 h-48 w-full rounded-md bg-[#E8EAF0] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={no_transactions} alt="image" className="w-6" />
              <p className="text-center text-[0.9rem]">No transactions yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

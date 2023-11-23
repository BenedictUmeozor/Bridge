import { Search } from "react-feather";
import transactions from "../../../assets/images/transaction.svg";

const Transactions = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Transactions</h2>
      <div className="flex items-center h-14 gap-2">
        <div className="flex-[1.5] h-full relative">
          <input
            type="text"
            className="h-full w-full px-2 border-2 border-[#ccc] rounded focus:border-primary_blue"
            placeholder="Search by email, name"
          />
          <Search className="w-4 absolute top-1/2 transform -translate-y-[50%] right-2 " />
        </div>
        <button className="flex-[0.5] flex items-center gap-2 h-full rounded-md text-white bg-primary_blue hover:scale-95  justify-center">
          <svg
            width="25"
            className="w-5"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 4.5L10.7 12.9089V19.2222L14.3 21V12.9089L21.5 4.5H3.5Z"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
          Filter by date
        </button>
      </div>
      <div className="mt-10 flex flex-col gap-2 items-center justify-center">
        <img src={transactions} alt="w-28 mx-auto" />
        <p>No transactions yet</p>
      </div>
    </div>
  );
};
export default Transactions;

import { Search } from "react-feather";
import transactions from "../../../assets/images/transaction.svg";
import { Helmet } from "react-helmet";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const Transactions = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleClick = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = () => setShowDatePicker(false);

  return (
    <>
      <Helmet>
        <title>Bridge - Transactions</title>
      </Helmet>
      <div>
        <h2 className="text-2xl font-bold mb-8">Transactions</h2>
        <div className="relative flex items-center h-14 gap-2 max-md:block">
          <div className="flex-[1.5] h-full relative">
            <input
              type="text"
              className="h-full w-full px-2 border-2 border-[#ccc] rounded focus:border-primary_blue"
              placeholder="Search by email, name"
            />
            <Search className="w-4 absolute top-1/2 transform -translate-y-[50%] right-2 " />
          </div>
          <button
            className="flex-[0.5] flex items-center gap-2 h-full rounded-md text-white bg-primary_blue hover:scale-95  justify-center max-md:w-full max-md:mt-4"
            onClick={handleClick}
          >
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
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            Filter by date
          </button>
          {showDatePicker && (
            <div className="datepicker-filter absolute z-10 top-full right-0 max-md:top-[250%] max-md:right-[50%] max-md:translate-x-[50%]">
              <Calendar onChange={handleDateChange} className="block" />
            </div>
          )}
        </div>
        <div className="mt-10 flex flex-col gap-2 items-center justify-center max-md:mt-36">
          <img src={transactions} alt="" className="w-28 mx-auto" />
          <p>No transactions yet</p>
        </div>
      </div>
    </>
  );
};
export default Transactions;

import { Search } from "react-feather";
import { Link } from "react-router-dom";
import beneficiaries from "../../../assets/images/beneficiaries.svg";

const Beneficiaries = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Beneficiaries</h2>
      <div className="flex items-center h-14 gap-2 max-md:block">
        <div className="flex-[1.5] h-full relative">
          <input
            type="text"
            className="h-full w-full px-2 border-2 border-[#ccc] rounded focus:border-primary_blue"
            placeholder="Search by email, name"
          />
          <Search className="w-4 absolute top-1/2 transform -translate-y-[50%] right-2 " />
        </div>
        <Link
          to="/dashboard/beneficiaries/add"
          className="flex-[0.5] h-full rounded-md text-white bg-primary_blue hover:scale-95 flex items-center justify-center max-md:mt-4"
        >
          Add beneficiary
        </Link>
      </div>
      <div className="mt-10 flex flex-col gap-2 items-center justify-center max-md:mt-36">
        <img src={beneficiaries} alt="" className="w-28 mx-auto" />
        <p>No added beneficiaries yet</p>
      </div>
    </div>
  );
};
export default Beneficiaries;

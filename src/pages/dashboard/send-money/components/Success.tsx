import share from "../../../../assets/icons/share.svg";
import add_beneficiary from "../../../../assets/icons/add-beneficiary.svg";

const Success = () => {
  return (
    <div className="max-w-lg text-center mt-10 mx-auto">
      <div className="mx-auto">
        <svg
          width="159"
          height="159"
          className="mx-auto w-24"
          viewBox="0 0 159 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="159" height="159" rx="79.5" fill="#78D076" />
          <path
            d="M33.125 79.5L66.25 112.625L132.5 46.375"
            stroke="white"
            stroke-width="11"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h2 className="font-semibold mt-4">Transfer Successful</h2>
      <p className="mt-2">
        The recipient is expected to be credited within two days, they will
        receive a notification by thier bank
      </p>
      <div className="mt-8 flex items-center gap-4">
        <button className="flex-1 flex items-center justify-center gap-2 text-center bg-white py-3 border-2 border-primary_blue rounded-md hover:scale-95">
          <p>Share receipt</p>
          <img src={share} alt="image" className="w-5" />
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 text-center bg-primary_blue py-3 border-2 border-primary_blue rounded-md hover:scale-95">
          <p className="text-white">Add beneficiary</p>
          <img src={add_beneficiary} alt="image" className="w-5" />
        </button>
      </div>
    </div>
  );
};
export default Success;

import { FormEvent } from "react";

type Props = {
  changeStep: () => void;
};

const Address = ({ changeStep }: Props) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeStep();
  };

  return (
    <form className="max-w-lg" onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block mb-1 text-[0.9rem]">Country of residence</label>
        <input
          type="text"
          placeholder="Nigeria"
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-[0.9rem]">City</label>
        <input
          type="text"
          placeholder="Port Harcourt"
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-[0.9rem]">Home address</label>
        <input
          type="text"
          placeholder="Street name"
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-[0.9rem]">Postal code</label>
        <input
          type="text"
          placeholder="Postal code"
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-1 text-[0.9rem]">BVN</label>
        <input
          type="text"
          placeholder="BVN"
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
        />
      </div>
      <button className="w-[90%] mx-auto text-white bg-primary_blue h-14 rounded-md hover:scale-95 flex items-center justify-center">
        Next
      </button>
    </form>
  );
};
export default Address;

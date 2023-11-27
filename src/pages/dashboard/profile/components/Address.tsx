import { FormEvent, useEffect } from "react";
import { useUserContext } from "../../../../contexts/User";

type Props = {
  changeStep: () => void;
  onCountryChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onHomeAddressChange: (value: string) => void;
  onBVNChange: (value: string) => void;
  onPostalCodeChange: (value: string) => void;
};

const Address = ({
  changeStep,
  onBVNChange,
  onCityChange,
  onCountryChange,
  onHomeAddressChange,
  onPostalCodeChange,
}: Props) => {
  const { user } = useUserContext();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeStep();
  };

  useEffect(() => {
    if (user) {
      onBVNChange(user.BVN ?? "");
      onCityChange(user.city ?? "");
      onCountryChange(user.country ?? "");
      onHomeAddressChange(user.homeAddress ?? "");
      onPostalCodeChange(user.postalCode ?? "");
    }
  }, [user]);

  return (
    <form className="max-w-lg" onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block mb-1 text-[0.95rem]">
          Country of residence
        </label>
        <input
          type="text"
          placeholder="Nigeria"
          defaultValue={user?.country}
          onChange={(e) => onCountryChange(e.target.value)}
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-[0.95rem]">City</label>
        <input
          type="text"
          placeholder="Port Harcourt"
          defaultValue={user?.city}
          onChange={(e) => onCityChange(e.target.value)}
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-[0.95rem]">Home address</label>
        <input
          type="text"
          placeholder="Street name"
          defaultValue={user?.homeAddress}
          onChange={(e) => onHomeAddressChange(e.target.value)}
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-[0.95rem]">Postal code</label>
        <input
          type="text"
          placeholder="Postal code"
          defaultValue={user?.postalCode}
          onChange={(e) => onPostalCodeChange(e.target.value)}
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-1 text-[0.95rem]">BVN</label>
        <input
          type="text"
          placeholder="BVN"
          defaultValue={user?.BVN}
          onChange={(e) => onBVNChange(e.target.value)}
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
          required
        />
      </div>
      <button className="w-[90%] mx-auto text-white bg-primary_blue h-14 rounded-md hover:scale-95 flex items-center justify-center">
        Next
      </button>
    </form>
  );
};
export default Address;

import { DatePicker, Select } from "antd";
import { useState, useEffect, FormEvent } from "react";
import libphonenumber from "google-libphonenumber";

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
const PNT = libphonenumber.PhoneNumberType;

type Code = {
  code: libphonenumber.RegionCode;
  countryCode: string;
};

type Props = {
  changeStep: () => void;
};

const Personal = ({ changeStep }: Props) => {
  const [countryCodes, setCountryCodes] = useState<Code[]>([]);

  useEffect(() => {
    const fetchCountryCodes = () => {
      const allRegions = phoneUtil.getSupportedRegions();

      const codes: Code[] = Array.from(allRegions)
        .map((region: string) => {
          const exampleNumber = phoneUtil.getExampleNumberForType(
            region,
            PNT.MOBILE
          );

          // Check if exampleNumber is not null before accessing its methods
          if (exampleNumber) {
            return {
              code: region,
              countryCode: `+${exampleNumber.getCountryCode()}`,
            };
          }
          return null;
        })
        .filter(Boolean) as Code[];

      setCountryCodes(codes);
    };

    fetchCountryCodes();
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeStep();
  };

  return (
    <form className="max-w-lg" onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block mb-1 text-[0.9rem]">
          First name and middle name (if any)
        </label>
        <input
          type="text"
          placeholder="John doe"
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-[0.9rem]">Surname</label>
        <input
          type="text"
          placeholder="John doe"
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-[0.9rem]">Date of birth</label>
        <div className="flex items-center gap-2">
          <DatePicker picker="month" className="flex-1 h-14" format="MMMM" />
          <DatePicker picker="date" className="flex-1 h-14" format="DD" />
          <DatePicker picker="year" className="flex-1 h-14" format="YYYY" />
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-1 text-[0.9rem]">Phone number</label>
        <div className="flex items-center gap-2">
          <Select
            className="flex-1 h-14"
            optionFilterProp="children"
            defaultValue={"+234"}
          >
            {countryCodes.map(({ code, countryCode }) => (
              <Select.Option key={code} value={code}>
                {`${countryCode} (${code})`}
              </Select.Option>
            ))}
          </Select>
          <input
            type="tel"
            placeholder="733635363"
            className="flex-[2] h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
          />
        </div>
      </div>
      <button className="w-[90%] mx-auto text-white bg-primary_blue h-14 rounded-md hover:scale-95 flex items-center justify-center">
        Next
      </button>
    </form>
  );
};
export default Personal;

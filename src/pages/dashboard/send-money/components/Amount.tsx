import { FormEvent } from "react";
import { useNationContext } from "../../../../contexts/Nations";
import { Select } from "antd";

type Props = {
  changeStep: () => void;
};

const Amount = ({ changeStep }: Props) => {
  const countries = useNationContext();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeStep();
  };

  return (
    <div className="max-w-xl mt-10 mx-auto">
      <form
        className="border-2 w-full border-[#AAB1C7] rounded-md p-6"
        onSubmit={onSubmit}
      >
        <div className="mb-4">
          <p className="mb-1">You send</p>
          <div className=" border-2 rounded border-[#AAB1C7] flex items-center justify-between gap-2 bg-white">
            <Select
              showSearch
              className="w-full border-0 appearance-none"
              placeholder="Select a country"
              optionFilterProp="children"
              bordered={false}
            >
              {countries.map((country) => (
                <Select.Option
                  key={country.alpha2Code}
                  value={country.name.common}
  
                >
                  <img
                    src={country.flags.svg}
                    alt={`${country.name} Flag`}
                    className="inline-block"
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  {country.name.common}
                </Select.Option>
              ))}
            </Select>
            <svg
              width="2"
              height="47"
              viewBox="0 0 2 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0.5V46.5" stroke="#B3B3B3" stroke-width="1.5" />
            </svg>

            <input
              type="number"
              placeholder="Enter Amount"
              className="text-xs placeholder:text-xs spin-button-none"
            />
          </div>
        </div>
        <div className="">
          <p className="mb-1">Recipient receives</p>
          <div className=" border-2 rounded border-[#AAB1C7] flex items-center justify-between gap-2 bg-white">
            <Select
              showSearch
              className="w-full border-0 appearance-none"
              placeholder="Select a country"
              optionFilterProp="children"
              bordered={false}
            >
              {countries.map((country) => (
                <Select.Option
                  key={country.alpha2Code}
                  value={country.name.common}
                >
                  <img
                    src={country.flags.svg}
                    alt={`${country.name} Flag`}
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  {country.name.common}
                </Select.Option>
              ))}
            </Select>
            <svg
              width="2"
              height="47"
              viewBox="0 0 2 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0.5V46.5" stroke="#B3B3B3" stroke-width="1.5" />
            </svg>

            <input
              type="number"
              placeholder="Enter Amount"
              className="text-xs placeholder:text-xs spin-button-none"
            />
          </div>
        </div>
        <button className="h-14 w-full mt-10 rounded-md bg-primary_blue text-white hover:scale-95">
          Continue
        </button>
      </form>
    </div>
  );
};
export default Amount;

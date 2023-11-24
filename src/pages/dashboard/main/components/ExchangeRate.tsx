import { Select } from "antd";
import { useNationContext } from "../../../../contexts/Nations";

const ExchangeRate = () => {
  const countries = useNationContext();

  return (
    <div className="bg-[#E8EAF0] max-w-md rounded-md p-6">
      <div className="mb-4 border-2 border-[#FEFEFE] flex items-center justify-between gap-2 bg-white">
        <Select
          showSearch
          className="w-full border-0 appearance-none max-md:flex-1"
          placeholder="Select a country"
          optionFilterProp="children"
          bordered={false}
        >
          {countries.map((country) => (
            <Select.Option key={country.alpha2Code} value={country.name.common}>
              <div className="flex items-center gap-1 ">
                {" "}
                <img
                  src={country.flags.svg}
                  alt={`${country.name} Flag`}
                  style={{ width: "20px", marginRight: "8px" }}
                />
                {country.name.common}
              </div>
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
          className="text-xs placeholder:text-xs spin-button-none max-md:flex-1"
        />
      </div>
      <div className="border-2 border-[#FEFEFE] flex items-center justify-between  gap-2 bg-white">
        <Select
          showSearch
          className="w-full border-0 appearance-none max-md:flex-1"
          placeholder="Select a country"
          optionFilterProp="children"
          bordered={false}
        >
          {countries.map((country) => (
            <Select.Option key={country.alpha2Code} value={country.name.common}>
              <div className="flex items-center gap-1">
                {" "}
                <img
                  src={country.flags.svg}
                  alt={`${country.name} Flag`}
                  style={{ width: "20px", marginRight: "8px" }}
                />
                {country.name.common}
              </div>
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
          className="text-xs placeholder:text-xs spin-button-none max-md:flex-1"
        />
      </div>
    </div>
  );
};
export default ExchangeRate;

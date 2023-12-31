import { FormEvent } from "react";
import { Select } from "antd";
import { country_list } from "../../../../data/data";
import { useState, useEffect } from "react";

type Props = {
  changeStep: () => void;
};

const Amount = ({ changeStep }: Props) => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [converting, setConverting] = useState(false);

  const handleChange = (value: string) => {
    setFromCurrency(value);
  };

  const handleToChange = (value: string) => {
    setToCurrency(value);
  };

  const getExchangeRate = async (from: string, to: string, amount: string) => {
    try {
      setExchangeRate("");
      setConverting(true);
      const url = `https://v6.exchangerate-api.com/v6/c7e536f6027c5f5b7c15e5eb/latest/${from}`;

      const res = await fetch(url);
      const result = await res.json();

      const rate = result?.conversion_rates[to];
      const totalRate = (Number(amount) * rate).toFixed(2);
      setExchangeRate(totalRate);
      console.log(totalRate);
    } catch (error) {
      setExchangeRate("error");
      console.log(error);
    } finally {
      setConverting(false);
    }
  };

  useEffect(() => {
    if (!fromAmount) {
      setExchangeRate("");
    }
    if (fromAmount && fromCurrency && toCurrency) {
      getExchangeRate(fromCurrency, toCurrency, fromAmount);
    }
  }, [fromCurrency, toCurrency, fromAmount]);

  const countryOptions = Object.entries(country_list).map(
    ([value, { code, currency }]) => (
      <Select.Option key={value} value={value}>
        <div className="flex items-center gap-2">
          <img
            src={`https://flagcdn.com/48x36/${code.toLowerCase()}.png`}
            alt={`${currency} Flag`}
            className="w-5"
          />
          {currency} ({value})
        </div>
      </Select.Option>
    )
  );

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
          <div className="mb-4 border-2 border-[#ccc] rounded flex items-center justify-between gap-2 bg-white">
            <Select
              className="w-full border-0 appearance-none flex-[1.2]"
              placeholder="Select a country"
              optionFilterProp="children"
              bordered={false}
              onChange={handleChange}
              dropdownStyle={{ width: "300px" }}
            >
              {countryOptions}
            </Select>
            <svg
              width="2"
              height="47"
              viewBox="0 0 2 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0.5V46.5" stroke="#B3B3B3" strokeWidth="1.5" />
            </svg>

            <input
              type="number"
              placeholder="Enter Amount"
              className="text-xs placeholder:text-xs h-full w-full spin-button-none flex-[0.8]"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="">
          <p className="mb-1">Recipient receives</p>
          <div className="border-2 border-[#ccc] rounded flex items-center justify-between overflow-hidden  gap-2 bg-white">
            <Select
              className="w-full border-0 appearance-none flex-[1.2]"
              placeholder="Select a country"
              optionFilterProp="children"
              bordered={false}
              onChange={handleToChange}
              dropdownStyle={{ width: "300px" }}
            >
              {countryOptions}
            </Select>
            <svg
              width="2"
              height="47"
              viewBox="0 0 2 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0.5V46.5" stroke="#B3B3B3" strokeWidth="1.5" />
            </svg>

            <p className="text-xs flex-[0.8]">
              {exchangeRate
                ? toCurrency + " " + exchangeRate
                : converting
                ? "converting..."
                : ""}
            </p>
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

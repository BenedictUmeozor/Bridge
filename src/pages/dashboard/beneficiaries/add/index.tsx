import { Helmet } from "react-helmet";
import { Select } from "antd";
import { country_list } from "../../../../data/data";

const AddBeneficiaries = () => {
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

  return (
    <>
      <Helmet>
        <title>Bridge - Add beneficiary</title>
      </Helmet>
      <div>
        <h2 className="text-2xl font-bold mb-2">Beneficiaries</h2>
        <p className="mb-8">Enter beneficiary details</p>
        <form className="max-w-lg">
          <div className="mb-4">
            <label className="block mb-1">Country's currency</label>
            <Select className="h-14 w-full">{countryOptions}</Select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Full name of account holder</label>
            <input
              type="text"
              placeholder="John doe"
              className="w-full h-14 px-2 rounded border-2 border-[#ccc] hover:border-primary_blue"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">IBAN</label>
            <input
              type="text"
              placeholder="IBAN"
              className="w-full h-14 px-2 rounded border-2 border-[#ccc] hover:border-primary_blue"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">SWIFT code</label>
            <input
              type="password"
              placeholder="*********"
              className="w-full h-14 px-2 rounded border-2 border-[#ccc] hover:border-primary_blue"
            />
          </div>
          <button className="h-14 w-full bg-primary_blue rounded-md hover:scale-95 text-white">
            Save
          </button>
        </form>
      </div>
    </>
  );
};
export default AddBeneficiaries;

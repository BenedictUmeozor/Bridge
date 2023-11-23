const AddBeneficiaries = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Beneficiaries</h2>
      <p className="mb-8">Enter beneficiary details</p>
      <form className="max-w-lg">
        <div className="mb-4">
          <label className="block mb-1">Country's currency</label>
          <input
            type="text"
            placeholder="Canada"
            className="w-full h-14 px-2 rounded border-2 border-[#ccc] hover:border-primary_blue"
          />
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
  );
};
export default AddBeneficiaries;

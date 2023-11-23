import { FormEvent } from "react";

type Props = {
  changeStep: () => void;
};

const Form = ({ changeStep }: Props) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeStep();
  };

  return (
    <div className="max-w-xl mt-5 mx-auto">
      <form className="w-full" onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john@gmail.com"
            className="h-16 border-2 border-[#AAB1C7] rounded px-2 placeholder:text-[#ccc] w-full focus:border-primary_blue"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Account Holders Full name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className="h-16 border-2 border-[#AAB1C7] rounded px-2 placeholder:text-[#ccc] w-full focus:border-primary_blue"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="iban" className="block mb-1">
            IBAN
          </label>
          <input
            type="text"
            name="iban"
            id="iban"
            placeholder="IBAN"
            className="h-16 border-2 border-[#AAB1C7] rounded px-2 placeholder:text-[#ccc] w-full focus:border-primary_blue"
          />
        </div>
        <button className="h-14 w-full mt-10 rounded-md bg-primary_blue text-white hover:scale-95">
          Send
        </button>
      </form>
    </div>
  );
};
export default Form;

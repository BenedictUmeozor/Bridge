import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Container from "../../../components/Container";

type Props = {
  onNext: () => void;
  setCountry: Dispatch<SetStateAction<string | null>>;
};

const Country = ({ onNext, setCountry }: Props) => {
  const [value, setValue] = useState<null | string>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCountry(value);
    onNext();
  };

  return (
    <div>
      <Container className="max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-2">
          What country do you live in?
        </h2>
        <p className="mb-10 text-[0.9rem]">We may ask for proof of address</p>
        <form className="max-w-lg mx-auto" onSubmit={onSubmit}>
          <div className="mb-8">
            <label
              htmlFor="email"
              className="font-semibold block text-left mb-2"
            >
              Country
            </label>
            <input
              type="text"
              id="email"
              placeholder="Nigeria"
              onChange={(e) => setValue(e.target.value)}
              className="h-16 appearance-none rounded-md border-2 border-[#bbb] w-full px-2"
            />
          </div>
          <button
            className="h-12 text-center bg-primary_blue text-white font-bold w-full rounded-md transform hover:scale-95 hover:opacity-75"
            disabled={value === null || value === ""}
            onClick={onNext}
          >
            Next
          </button>
        </form>
      </Container>
    </div>
  );
};
export default Country;

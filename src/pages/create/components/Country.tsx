import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Container from "../../../components/Container";

type Props = {
  onNext: () => void;
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
};

const Country = ({ onNext, setCountry, country }: Props) => {
  const [value, setValue] = useState<string>("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCountry(value);
    onNext();
  };

  useEffect(() => {
    setValue(country);
    console.log(country)
  }, []);

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
              htmlFor="country"
              className="font-semibold block text-left mb-2"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              placeholder="Nigeria"
              value={country}
              onChange={(e) => setValue(e.target.value)}
              className="h-16 appearance-none rounded-md border-2 border-[#bbb] w-full px-2"
            />
          </div>
          <button
            className="h-12 text-center bg-primary_blue text-white font-bold w-full rounded-md transform hover:scale-95 hover:opacity-75"
            disabled={value.trim() === ""}
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

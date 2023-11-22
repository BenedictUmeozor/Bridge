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
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
};

const PhoneNumber = ({ onNext, setPhoneNumber, phoneNumber }: Props) => {
  const [value, setValue] = useState<string>("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPhoneNumber(value);
    onNext();
  };

  useEffect(() => {
    setValue(phoneNumber);
  }, []);

  return (
    <div>
      <Container className="max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Enter phone number and verify with code
        </h2>
        <p className="mb-10 text-[0.9rem]">We may ask for proof of address</p>
        <form className="max-w-lg mx-auto" onSubmit={onSubmit}>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="font-semibold block text-left mb-2"
            >
              Enter phone number
            </label>
            <input
              type="tel"
              id="password"
              placeholder="+23412345678"
              defaultValue={phoneNumber}
              onChange={(e) => setValue(e.target.value)}
              className="h-16 appearance-none rounded-md border-2 border-[#bbb] w-full px-2"
            />
          </div>
          <button
            className="h-12 text-center bg-primary_blue text-white font-bold w-full rounded-md transform hover:scale-95 hover:opacity-75"
            disabled={value.trim() === ""}
          >
            Next
          </button>
        </form>
      </Container>
    </div>
  );
};
export default PhoneNumber;

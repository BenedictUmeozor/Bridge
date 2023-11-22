import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

type Props = {
  onNext: () => void;
  setEmail: Dispatch<SetStateAction<string | null>>;
};

const CreateAccount = ({ onNext, setEmail }: Props) => {
  const [value, setValue] = useState<null | string>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail(value);
    onNext();
  };

  return (
    <div>
      <Container className="max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Create your Bridge account
        </h2>
        <p className="mb-10 text-[0.9rem]">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-primary_blue">
            Login
          </Link>
        </p>
        <form className="max-w-lg mx-auto" onSubmit={onSubmit}>
          <div className="mb-8">
            <label
              htmlFor="email"
              className="font-semibold block text-left mb-2"
            >
              Enter your email
            </label>
            <input
              type="text"
              id="email"
              placeholder="john@gmail.com"
              onChange={(e) => setValue(e.target.value)}
              className="h-16 appearance-none rounded-md border-2 border-[#bbb] w-full px-2"
            />
          </div>
          <button
            className="h-12 text-center bg-primary_blue text-white font-bold w-full rounded-md transform hover:scale-95 hover:opacity-75"
            disabled={value === null || value === ""}
          >
            Next
          </button>
        </form>
        <p className="mt-6 text-xs">
          By registering, you are agreeing to out{" "}
          <span className="text-primary_blue">terms</span> and{" "}
          <span className="text-primary_blue">conditions</span>
        </p>
      </Container>
    </div>
  );
};
export default CreateAccount;

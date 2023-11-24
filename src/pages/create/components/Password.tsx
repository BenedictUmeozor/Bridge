import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Container from "../../../components/Container";
import { Eye, EyeOff } from "react-feather";
import { useNavigate } from "react-router-dom";

type Props = {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

const Password = ({ setPassword, password }: Props) => {
  const [value, setValue] = useState<string>("");
  const [type, setType] = useState("password");
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPassword(value);
    navigate("/dashboard");
  };

  useEffect(() => {
    setValue(password);
  }, []);

  return (
    <div>
      <Container className="max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Create Password</h2>
        <p className="mb-10 text-[0.9rem]">
          Password should be at least 9 characters containing a letter and a
          number
        </p>
        <form className="max-w-lg mx-auto" onSubmit={onSubmit}>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="font-semibold block text-left mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={type}
                id="password"
                placeholder="******************"
                defaultValue={password}
                onChange={(e) => setValue(e.target.value)}
                className="h-16 appearance-none rounded-md border-2 border-[#bbb] w-full px-2"
              />
              {type === "text" ? (
                <EyeOff
                  className="w-4 absolute top-1/2 -translate-y-[50%] right-2"
                  onClick={() => setType("password")}
                />
              ) : (
                <Eye
                  className="w-4 absolute top-1/2 -translate-y-[50%] right-2"
                  onClick={() => setType("text")}
                />
              )}
            </div>
          </div>
          <button
            className="h-12 text-center bg-primary_blue text-white font-bold w-full rounded-md transform hover:scale-95 hover:opacity-75"
            disabled={value.trim() === ""}
          >
            Done
          </button>
        </form>
      </Container>
    </div>
  );
};
export default Password;

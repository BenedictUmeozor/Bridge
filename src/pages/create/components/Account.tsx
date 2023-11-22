import Container from "../../../components/Container";
import user from "../../../assets/images/user.svg";
import briefcase from "../../../assets/images/briefcase.svg";
import { Dispatch, SetStateAction } from "react";

type Props = {
  onNext: () => void;
  chosenAccount: null | "personal" | "business";
  setChosenAccount: Dispatch<SetStateAction<"personal" | "business" | null>>;
};

const Account = ({ onNext, chosenAccount, setChosenAccount }: Props) => {
  const setAccount = (account: "personal" | "business" | null) => {
    setChosenAccount(account);
    onNext();
  };

  return (
    <div>
      <Container className="text-center max-w-4xl">
        <h2 className="text-2xl font-semibold mb-2">
          What kind of account would you like to open?
        </h2>
        <p className="mb-10 text-[0.9rem]">
          Please note you can not use a personal account to open a business
          account
        </p>
        <div className="flex items-center gap-8 max-md:flex-col">
          <div
            className={
              "flex-1 py-4 rounded bg-[#FFECE3] cursor-pointer transform transition-all duration-100 ease-in hover:scale-95 hover:border-2 hover:border-primary_blue max-md:w-[90%] " +
              (chosenAccount === "personal"
                ? "border-2 border-primary_blue"
                : "")
            }
            onClick={() => setAccount("personal")}
          >
            <img src={user} alt="image" className="w-36 mx-auto mb-4" />
            <p>Personal Account</p>
          </div>
          <div
            className={
              "flex-1 py-4 rounded bg-[#D2A5FF24] cursor-pointer transform transition-all duration-100 ease-in hover:scale-95 hover:border-2 hover:border-primary_blue max-md:w-[90%] " +
              (chosenAccount === "business"
                ? "border-2 border-primary_blue"
                : "")
            }
            onClick={() => setAccount("business")}
          >
            <img src={briefcase} alt="image" className="w-36 mx-auto mb-4" />
            <p>Business Account</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Account;

import { useState } from "react";
import Account from "./components/Account";
import Country from "./components/Country";
import CreateAccount from "./components/CreateAccount";
import Header from "./components/Header";
import PhoneNumber from "./components/PhoneNumber";
import Progress from "./components/Progress";
import OTP from "./components/OTP";
import Password from "./components/Password";
import Helmet from "react-helmet";
import { toast } from "react-hot-toast";
import Loading from "../../components/Backdrop";
import NotProtected from "../../components/NotProtected";
import { axiosInstance } from "../../libs/axios";

const OnBoarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [chosenAccount, setChosenAccount] = useState<
    null | "personal" | "business"
  >(null);
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosInstance.post("/sign_up", {
        email,
        country,
        phoneNumber,
        password,
        passwordConfirmation: password,
      });
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async () => {
    if (!email || !password || !phoneNumber || !country) {
      return toast.error("All fields are required");
    }

    toast.promise(registerUser(), {
      loading: "Signing up...",
      success: ({ id, token }: { id: string; token: string }) => {
        sessionStorage.setItem("id", JSON.stringify(id));
        sessionStorage.setItem("token", JSON.stringify(token));
        return "Registered successfully";
      },
      error: "Registration failed",
    });
  };

  return (
    <>
      <Helmet>
        <title>Bridge - Create your account</title>
      </Helmet>
      {isLoading && <Loading />}
      <NotProtected>
        <section className="pb-3">
          <div className="hidden">
            {email! + country + phoneNumber + password}
          </div>
          <Header />
          <Progress currentStep={currentStep} setCurrentStep={setCurrentStep} />
          <div>
            {currentStep === 1 && (
              <Account
                onNext={() => setCurrentStep(2)}
                chosenAccount={chosenAccount}
                setChosenAccount={setChosenAccount}
              />
            )}
            {currentStep === 2 && (
              <CreateAccount
                onNext={() => setCurrentStep(3)}
                setEmail={setEmail}
                email={email}
              />
            )}
            {currentStep === 3 && (
              <Country
                onNext={() => setCurrentStep(4)}
                setCountry={setCountry}
                country={country}
              />
            )}
            {currentStep === 4 && (
              <PhoneNumber
                onNext={() => setCurrentStep(5)}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
              />
            )}
            {currentStep === 5 && <OTP onNext={() => setCurrentStep(6)} />}
            {currentStep === 6 && (
              <Password
                password={password}
                setPassword={setPassword}
                onRegister={register}
              />
            )}
          </div>
        </section>
      </NotProtected>
    </>
  );
};
export default OnBoarding;

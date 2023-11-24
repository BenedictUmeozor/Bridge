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

const OnBoarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [chosenAccount, setChosenAccount] = useState<
    null | "personal" | "business"
  >(null);
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <Helmet>
        <title>Bridge - Create your account</title>
      </Helmet>
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
            <Password password={password} setPassword={setPassword} />
          )}
        </div>
      </section>
    </>
  );
};
export default OnBoarding;

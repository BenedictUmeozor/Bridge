import { useState } from "react";
import Account from "./components/Account";
import Country from "./components/Country";
import CreateAccount from "./components/CreateAccount";
import Header from "./components/Header";
import PhoneNumber from "./components/PhoneNumber";
import Progress from "./components/Progress";
import OTP from "./components/OTP";
import Password from "./components/Password";

const OnBoarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [chosenAccount, setChosenAccount] = useState<
    null | "personal" | "business"
  >(null);
  const [email, setEmail] = useState<null | string>(null);
  const [country, setCountry] = useState<null | string>(null);
  const [phoneNumber, setPhoneNumber] = useState<null | string>(null);
  const [password, setPassword] = useState<null | string>(null);

  return (
    <section>
      <div className="hidden">{email! + country + phoneNumber + password}</div>
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
          <CreateAccount onNext={() => setCurrentStep(3)} setEmail={setEmail} />
        )}
        {currentStep === 3 && (
          <Country onNext={() => setCurrentStep(4)} setCountry={setCountry} />
        )}
        {currentStep === 4 && (
          <PhoneNumber
            onNext={() => setCurrentStep(5)}
            setPhoneNumber={setPhoneNumber}
          />
        )}
        {currentStep === 5 && <OTP onNext={() => setCurrentStep(6)} />}
        {currentStep === 6 && (
          <Password
            onNext={() => setCurrentStep(6)}
            setPassword={setPassword}
          />
        )}
      </div>
    </section>
  );
};
export default OnBoarding;

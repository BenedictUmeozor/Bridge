import { useState } from "react";
import Amount from "./components/Amount";
import Form from "./components/Form";
import PIN from "./components/Pin";
import Success from "./components/Success";
import { Helmet } from "react-helmet";

const SendMoney = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const changeStep = (value: number) => {
    setCurrentStep(value);
  };

  return (
    <>
      <Helmet>
        <title>Bridge - Send money</title>
      </Helmet>
      <div>
        {currentStep === 1 && <Amount changeStep={() => changeStep(2)} />}
        {currentStep === 2 && <Form changeStep={() => changeStep(3)} />}
        {currentStep === 3 && <PIN changeStep={() => changeStep(4)} />}
        {currentStep === 4 && <Success />}
      </div>
    </>
  );
};
export default SendMoney;

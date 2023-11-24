import Address from "./components/Address";
import PIN from "./components/PIN";
import Personal from "./components/Personal";
import { useState } from "react";

const Profile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div>
      {currentStep !== 3 && (
        <>
          {" "}
          <h2 className="font-bold text-2xl mb-3">Your details</h2>
          <p className="mb-6">Personal information</p>
        </>
      )}
      {currentStep === 1 && <Personal changeStep={() => setCurrentStep(2)} />}
      {currentStep === 2 && <Address changeStep={() => setCurrentStep(3)} />}
      {currentStep === 3 && <PIN changeStep={() => setCurrentStep(3)} />}
    </div>
  );
};
export default Profile;

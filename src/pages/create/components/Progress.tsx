import { ArrowLeft } from "react-feather";
import Container from "../../../components/Container";
import { Dispatch, SetStateAction } from "react";

type Props = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const Progress = ({ currentStep, setCurrentStep }: Props) => {
  const goBack = () => {
    setCurrentStep(currentStep - 1);
    console.log(currentStep);
  };

  return (
    <div className="mt-8 mb-5  ">
      <Container className="relative flex items-center justify-center max-md:flex-col max-md:gap-5">
        <div className="flex items-center justify-center gap-1">
          <div
            className={`progress_dot ${currentStep === 1 ? "active" : ""}`}
          ></div>
          <div
            className={`progress_dot ${currentStep === 2 ? "active" : ""}`}
          ></div>
          <div
            className={`progress_dot ${currentStep === 3 ? "active" : ""}`}
          ></div>
          <div
            className={`progress_dot ${currentStep === 4 ? "active" : ""}`}
          ></div>
          <div
            className={`progress_dot ${currentStep === 5 ? "active" : ""}`}
          ></div>
          <div
            className={`progress_dot ${currentStep === 6 ? "active" : ""}`}
          ></div>
        </div>
        <button
          className="md:absolute top-1/2 -translate-y-[50%] left-0 flex items-center gap-1 hover:opacity-80"
          disabled={currentStep === 1}
          onClick={goBack}
        >
          <ArrowLeft className="w-4 text-primary_blue" />
          <span className="text-[0.925rem] text-primary_blue cursor-pointer">
            Back
          </span>
        </button>
      </Container>
    </div>
  );
};
export default Progress;

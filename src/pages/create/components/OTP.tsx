import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import Container from "../../../components/Container";
import { v4 as uuidV4 } from "uuid";

type Props = {
  onNext: () => void;
};

const OTP = ({ onNext }: Props) => {
  const [pin, setPin] = useState<string[]>(new Array(4).fill(""));
  const [currentIndex, setCurrentIndex] = useState(0);
  const element = useRef<HTMLInputElement>(null);

  const handleChange = (
    { target }: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newPin = [...pin];
    newPin[index] = target.value;
    setPin(newPin);

    const newIndex = target.value ? currentIndex + 1 : index;
    setCurrentIndex(newIndex);
    console.log(newIndex, index);
  };

  const handleInput = (
    { key }: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (key === "Backspace") {
      const newPin = [...pin];
      newPin[index] = "";
      setPin(newPin);
      setCurrentIndex(index - 1);
    }
  };

  useEffect(() => {
    element.current?.focus();
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex < 0) {
      setCurrentIndex(1);
    } else if (currentIndex > pin.length - 1) {
      setCurrentIndex(pin.length - 1);
    }
  }, [currentIndex]);

  return (
    <div>
      <Container className="max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-2">OTP Verification Code</h2>
        <p className="mb-10 text-[0.9rem]">
          Kindly input the verification code sent to your phone number
          +234*****5790
        </p>
        <div className="flex items-center justify-center gap-4">
          {pin.map((number, index) => (
            <input
              type="tel"
              ref={currentIndex === index ? element : null}
              key={uuidV4()}
              value={number}
              onChange={(e) => handleChange(e, index)}
              onClick={() => setCurrentIndex(index)}
              onKeyUp={(e) => handleInput(e, index)}
              maxLength={1}
              className="bg-[#d9d9d9] w-16 h-16 appearance-none rounded-[1rem] text-center spin-button-none focus:border-2 focus:border-primary_blue"
            />
          ))}
        </div>
        <p className="text-[0.9rem] mt-6">
          Didn’t receive the code?{" "}
          <span className="text-primary_blue">Resend</span>
        </p>
        <button
          className="h-12 mt-10 text-center bg-primary_blue text-white font-bold w-full max-w-lg  rounded-md transform hover:scale-95 hover:opacity-75"
          onClick={onNext}
        >
          Verify
        </button>
      </Container>
    </div>
  );
};
export default OTP;

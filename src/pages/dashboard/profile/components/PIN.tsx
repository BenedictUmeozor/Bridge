import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidV4 } from "uuid";

type Props = {
  changeStep: () => void;
};

const PIN = ({ changeStep }: Props) => {
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
    <div className="max-w-lg mt-5 mx-auto">
      <h2 className="text-center mb-2 text-2xl font-bold">
        Create your four digit transaction pin
      </h2>
      <p className="mb-6 text-[0.9rem] text-center">
        This will be the code you use for all transactions
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
            className="bg-[#d9d9d9] w-16 h-16 appearance-none rounded-md text-center spin-button-none focus:border-2 focus:border-primary_blue"
          />
        ))}
      </div>

      <button
        className="h-12 mt-10 text-center bg-primary_blue text-white font-bold w-full   rounded-md transform hover:scale-95 hover:opacity-75"
        onClick={changeStep}
      >
        Done
      </button>
    </div>
  );
};
export default PIN;

import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuidV4 } from "uuid";
import { useUserContext } from "../../../../contexts/User";

type Props = {
  changeStep: () => void;
  onPinChange: (value: string) => void;
};

const PIN = ({ changeStep, onPinChange }: Props) => {
  const [pin, setPin] = useState<string[]>(new Array(4).fill(""));
  const [currentIndex, setCurrentIndex] = useState(0);
  const element = useRef<HTMLInputElement>(null);

  const { getUser } = useUserContext();

  const handleSubmit = async () => {
    for (let i = 0; i <= pin.length - 1; i++) {
      if (pin[i].trim() === "") {
        return toast.error("Please enter your pin");
      }
    }
    await onPinChange(pin.join(""));
    await changeStep();
    await getUser();
  };

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
    <div className="max-w-lg mt-10 mx-auto">
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
            onChange={(e) => handleChange(e, index)}
            defaultValue={number}
            onClick={() => setCurrentIndex(index)}
            onKeyUp={(e) => handleInput(e, index)}
            maxLength={1}
            className="bg-[#d9d9d9] w-16 h-16 appearance-none rounded-md text-center spin-button-none focus:border-2 focus:border-primary_blue"
          />
        ))}
      </div>

      <button
        className="h-12 mt-10 text-center bg-primary_blue text-white font-bold w-full   rounded-md transform hover:scale-95 hover:opacity-75"
        onClick={handleSubmit}
      >
        Done
      </button>
    </div>
  );
};
export default PIN;

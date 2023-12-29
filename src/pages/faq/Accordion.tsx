import { useState } from "react";
import { MinusCircle, PlusCircle } from "react-feather";

type Props = {
  title: string;
  description: string;
  isOpen?: boolean;
};

const Accordion = ({ title, description, isOpen = false }: Props) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <div className="mb-4 text-primary_blue">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">{title}</h3>
        {!open ? (
          <PlusCircle
            className="w-5 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        ) : (
          <MinusCircle
            className="w-5 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      <p
        className={
          "w-[95%] transition-max-height duration-300 ease-linear " +
          (open ? "max-h-screen" : "overflow-hidden max-h-0")
        }
      >
        {description}
      </p>
    </div>
  );
};
export default Accordion;

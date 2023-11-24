import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={"max-w-6xl mx-auto px-2 " + (className ? className : "")}>
      {children}
    </div>
  );
};
export default Container;

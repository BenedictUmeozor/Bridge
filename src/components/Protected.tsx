import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

const Protected = ({ children }: { children: ReactNode }) => {
  const token = JSON.parse(sessionStorage.getItem("token")!);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};
export default Protected;
